// External Dependencies
import { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

// Icons and Assets
import { ImageIcon, LoaderIcon, Paperclip } from "lucide-react";
import avatar from "../../../assets/person.png";
import avatar2 from "../../../assets/person2.png";

// Internal Hooks and Utilities
import {
  useGetCollection,
  useGetMessages,
  useSendMessage,
} from "@/hook/message.hook";
import formatDateSmart from "@/lib/formatDateSmart";
import { Skeleton } from "@/components/ui/skeleton";
import echo from "@/lib/echo";

const users = [
  { name: "Mary Freund", img: avatar, id: 1 },
  { name: "Katie Sims", img: avatar2, id: 2 },
  { name: "Kathy Pacheco", img: avatar, id: 3 },
  { name: "David Elson", img: avatar2, id: 4 },
];

function Messages() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [attachment, setAttachment] = useState([]);

  const messagesEndRef = useRef(null);
  const imageInputRef = useRef(null);
  const fileInputRef = useRef(null);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");
  const user = JSON.parse(localStorage.getItem("user"));

  // API Calls
  const {
    data: getUserMessages,
    isLoading: getUserMessagesLoading,
    refetch: userDataRefetch,
  } = useGetMessages(userId);

  const { collectionData, isLoading: collectionLoading } = useGetCollection();

  const { mutate: sendMessage, isPending: sendMessageLoading } =
    useSendMessage();

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages[selectedUser.id], messages]);

  // Set default selected user
  useEffect(() => {
    if (collectionData?.data.length > 0 && userId === null) {
      setSelectedUser(collectionData.data[0]);
      navigate(
        `/dashboard/messages?userId=${collectionData.data[0]?.sender?.id}`
      );
    } else if (userId !== null) {
      const user = collectionData?.data?.find(
        (user) => user?.sender?.id === parseInt(userId)
      );
      if (user) setSelectedUser(user);
    }
  }, [collectionData]);

  // Sync messages from API
  useEffect(() => {
    if (getUserMessages?.data) {
      setMessages(getUserMessages?.data?.slice().reverse());
    }
  }, [getUserMessages, selectedUser]);

  // Echo real-time listener
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const channelName = `chat.${user?.id}`;
    const channel = echo.private(channelName);

    const handler = (e) => {
      setMessages((prev) => [...prev, e?.message]);
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setAttachment([]);
    };

    channel.listen("MessageSent", handler);

    return () => {
      channel.stopListening("MessageSent");
      echo.leave(channelName);
    };
  }, []);

  const handleSendMessage = () => {
    const newMessage = {
      receiver_id: userId,
      message: input,
      attachment: attachment,
    };

    if (input.trim() !== "" || attachment.length > 0) {
      sendMessage(newMessage, {
        onSuccess: () => {
          messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        },
        onError: (err) => console.error("Send failed", err),
      });
      setInput("");
    }
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleImageClick = () => imageInputRef.current?.click();
  const handleFileClick = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setAttachment((prev) => [...prev, file]);
  };

  return (
    <div className="flex h-[calc(100vh-99px)]">
      {/* Sidebar */}
      <div
        className={`w-full max-w-[459px] fixed md:static top-[99px] bg-background p-4 border-r overflow-y-auto duration-500 ${
          isSidebarOpen ? "left-0" : "-left-full"
        }`}
      >
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 lg:mb-8">
          Messages ({collectionData?.data?.length || "0"})
        </h2>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-4 px-6 mb-4 bg-white rounded-[32px] outline-none border border-[#E8E8E8]"
        />
        {collectionLoading ? (
          <div className="mt-6 md:mt-8 lg:mt-10 space-y-5 md:space-y-7">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="flex items-center space-x-4 mb-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-5 flex-1">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-6 md:mt-8 lg:mt-10 space-y-5 md:space-y-7">
            {collectionData?.data.map((user) => (
              <div
                key={user.id}
                className={`flex items-center gap-5 p-2 rounded cursor-pointer ${
                  selectedUser?.sender?.id === user?.sender.id
                    ? "bg-gray-200"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  setSelectedUser(user);
                  navigate(`/dashboard/messages?userId=${user?.sender.id}`);
                  setSelectedUser(user);
                }}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
                  <img src={user?.sender?.avatar} alt="image" />
                </div>
                <div className="space-y-2 flex-1">
                  <div className="flex items-center justify-between w-full">
                    {" "}
                    <p className="font-semibold text-base md:text-lg text-[#2f2f2f]">
                      {user?.sender?.name}
                    </p>
                    <p className="text-xs md:text-xs text-[#757575]">
                      {formatDateSmart(user?.created_at) || "No messages yet"}
                    </p>
                  </div>
                  <p className="text-base md:text-lg text-[#757575]">
                    {user?.text || "No messages yet"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          {collectionLoading ? (
            <div className="space-y-4">
              <div className="flex items-center space-x-4 mb-4">
                <Skeleton className="h-16 w-16 rounded-full" />
                <div className="space-y-5 flex-1">
                  <Skeleton className="h-4 w-[230px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-5">
              <div className="w-12 md:w-16 h-16 md:h-16 rounded-full overflow-hidden">
                <img src={selectedUser?.sender?.avatar} alt="image" />
              </div>

              <div>
                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold leading-[132%] text-[#315215] mb-2">
                  {selectedUser?.sender?.name || "Select a user"}
                </h2>
                <p className="text-base md:text-lg text-[#757575]">
                  {selectedUser?.text || "No messages yet"}
                </p>
              </div>
            </div>
          )}

          <button
            className="md:hidden p-3 bg-gray-700 text-white rounded-full"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex-1 p-4 overflow-y-auto">
          {messages?.map((msg, index) => {
            const isReceiver = msg.receiver_id === parseInt(userId);
            const isSameSenderAsPrev =
              index > 0 && messages[index - 1].sender_id === msg.sender_id;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isReceiver ? "items-end" : "items-start"
                } ${isSameSenderAsPrev ? "mb-4" : "mb-2"}`}
              >
                {!isReceiver && !isSameSenderAsPrev && (
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                      <img src={selectedUser?.sender?.avatar} alt="Avatar" />
                    </div>
                    <p className="text-lg">
                      {selectedUser?.sender?.name || "Unknown User"}
                    </p>
                    <p className="text-sm text-gray-400 ml-4">
                      {formatDateSmart(msg.created_at)}
                    </p>
                  </div>
                )}
                {msg?.attachments?.length > 0 && (
                  <div
                    className={`flex items-center gap-2 mb-2 ${
                      isReceiver ? "" : "translate-x-12"
                    }`}
                  >
                    {msg.attachments.map((file, index) => (
                      <div
                        key={index}
                        className="w-[122px] h-[122px] overflow-hidden"
                      >
                        {/* <img
                          src={file?.url}
                          alt={`Attachment ${index}`}
                          className="object-cover w-full h-full rounded-lg"
                        /> */}
                        {file.mime_type.startsWith("image/") ? (
                          <img
                            src={file?.url}
                            alt={`Attachment ${index}`}
                            className="object-cover w-full h-full rounded-lg"
                          />
                        ) : file.mime_type === "application/pdf" ? (
                          <iframe
                            src={`https://docs.google.com/gview?url=${file?.url}&embedded=true`}
                            width="100%"
                            height="100%"
                            className="rounded-lg"
                            title="PDF Viewer"
                          />
                        ) : (
                          <p className="text-xs text-gray-500">
                            Unsupported file
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
                {msg.text && (
                  <div
                    className={`px-6 py-2.5 shadow max-w-sm ${
                      isReceiver
                        ? "bg-[#314215] text-white rounded-tr-none rounded-tl-lg rounded-br-lg rounded-bl-lg"
                        : `bg-white rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg !translate-x-12 ${
                            isSameSenderAsPrev
                              ? "translate-x-12"
                              : "translate-x-9 mt-4"
                          }`
                    }`}
                  >
                    {msg.text}
                  </div>
                )}
                <p
                  className={`text-[10px] text-gray-400 text-right font-semibold ${
                    isReceiver ? "-translate-x-2" : "translate-x-12"
                  }`}
                >
                  {formatDateSmart(msg.created_at, "short")}
                </p>
              </div>
            );
          })}

          <div ref={messagesEndRef}></div>
        </div>
        {/* Message Input */}
        <div className="p-4 border-t ">
          {!sendMessageLoading ? (
            <div className="mb-4 flex gap-4">
              {attachment?.map((file, index) => (
                <div key={index} className="w-[70px] h-[70px] overflow-hidden">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Attachment ${index}`}
                      className="object-cover w-full h-full rounded-lg"
                    />
                  ) : (
                    <iframe
                      src={URL.createObjectURL(file)}
                      width="70px"
                      height="70px"
                      title="PDF Preview"
                    ></iframe>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-7 w-full">
              <LoaderIcon className="animate-spin mx-auto" />
            </div>
          )}
          <div className="flex gap-7 items-center">
            <div className="flex-shrink-0 flex items-center gap-2.5">
              <Paperclip onClick={handleFileClick} className="cursor-pointer" />
              <ImageIcon
                onClick={handleImageClick}
                className="cursor-pointer"
              />

              {/* Hidden image input */}
              <input
                type="file"
                accept="image/*"
                ref={imageInputRef}
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Hidden doc/pdf input */}
              <input
                type="file"
                accept=".pdf, .doc, .docx, .txt"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />
            </div>
            <input
              type="text"
              placeholder="Write your message"
              className="flex-1 py-4 px-6 border rounded-[32px]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            />
            <button
              className="p-4 bg-[#314215] text-white rounded-full"
              onClick={handleSendMessage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.5 12.5L15 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.74669 8.40628C1.68668 8.78486 1.77814 10.3132 2.87573 10.5627L11.5 12.5L13.4373 21.1243C13.6868 22.2219 15.2151 22.3133 15.5937 21.2533L21.9322 3.50557C22.2514 2.61167 21.3883 1.74856 20.4944 2.06781L2.74669 8.40628Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
