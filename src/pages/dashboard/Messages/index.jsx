import { useState, useRef, useEffect } from "react";
import avatar from "../../../assets/person.png";
import avatar2 from "../../../assets/person2.png";
import { Image, Paperclip } from "lucide-react";
import {
  useGetCollection,
  useGetMessages,
  useSendMessage,
} from "@/hook/message.hook";
import formatDateSmart from "@/lib/formatDateSmart";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate, useSearchParams } from "react-router";
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
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

  // API Call
  const {
    data: getUserMessages,
    isLoading: getUserMessagesLoading,
    refetch: userDataRefetch,
  } = useGetMessages(userId);
  const { collectionData, isLoading: collectionLoading } = useGetCollection();
  const { mutate: sendMessage } = useSendMessage();

  // console.log("collectionData", messages);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages[selectedUser.id]]);
  // Set Default Message User
  useEffect(() => {
    if (collectionData?.data.length > 0 && userId === null) {
      setSelectedUser(collectionData.data[0]);
      navigate(
        `/dashboard/messages?userId=${collectionData.data[0]?.sender?.id}`
      );
      setSelectedUser(collectionData.data[0]);
    } else if (userId !== null) {
      const user = collectionData?.data?.find(
        (user) => user?.sender?.id === parseInt(userId)
      );
      // console.log("user", user);

      if (user) {
        setSelectedUser(user);
      }
    }
  }, [collectionData]);
  // Sync API data
  useEffect(() => {
    if (getUserMessages?.data) {
      setMessages(getUserMessages?.data?.slice().reverse());
    }
  }, [getUserMessages, selectedUser]);

  // Live Chat Here
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    let channelName = `chat.${user?.id}`;
    const channel = echo.private(channelName);

    const handler = (e) => {
      // queryClient.setQueryData("user-collection-data", (oldData) => {
      //   console.log(oldData);

      //   return oldData;
      // });
      setMessages((prev) => [...prev, e?.message]);
      console.log(e?.message);
      // setMessages((prev) => {
      //   const alreadyExists = prev.some(
      //     (msg) => msg.message === e.message.content // or use e.message.id if available
      //   );
      //   if (alreadyExists) return prev;

      //   return [
      //     ...prev,
      //     {
      //       message: e.message.content,
      //       sender: e.message.sender_id === userId.id ? "user" : "agent",
      //       direction:
      //         e.message.sender_id === userId.id ? "outgoing" : "incoming",
      //     },
      //   ];
      // });
    };

    // Attach listener
    channel.listen("MessageSent", handler);

    // Cleanup listener on unmount
    return () => {
      channel.stopListening("MessageSent");
      echo.leave(channelName);
    };
  }, []);

  const handleSendMessage = () => {
    const newMessage = {
      receiver_id: userId,
      message: input,
    };
    if (input.trim() !== "") {
      sendMessage(newMessage, {
        onSuccess: (res) => {
          // console.log(messages, "res", res?.data);
          // setMessages((prev) => {
          //   const alreadyExists = prev.some(
          //     (msg) => msg.message === res?.data // or use e.message.id if available
          //   );
          //   if (alreadyExists) return prev;
          //   return [...prev, res?.data];
          // });
          // setMessages((prev) => [...prev, res?.data]);
          // You can update message with server ID or timestamp if needed
        },
        onError: (err) => {
          console.error("Send failed", err);
        },
      });
      setInput("");
    }
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
          Messages (04)
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
                  isReceiver ? "items-end" : "items-start space-x-3"
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
                <div
                  className={`px-6 py-2.5 shadow max-w-sm ${
                    isReceiver
                      ? "bg-[#314215] text-white rounded-tr-none rounded-tl-lg rounded-br-lg rounded-bl-lg"
                      : `bg-white rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg ${
                          isSameSenderAsPrev
                            ? "translate-x-12"
                            : "translate-x-9 mt-4"
                        }`
                  }`}
                >
                  {msg.text}
                </div>
                <p
                  className={`text-[10px] text-gray-400 text-right font-semibold ${
                    isReceiver ? "-translate-x-2" : "translate-x-9"
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
        <div className="p-4 border-t flex gap-7 items-center">
          <div className="flex-shrink-0 flex items-center gap-2.5">
            <Paperclip />
            <Image
              onClick={() => console.log("Image clicked")}
              className="cursor-pointer"
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
  );
}

export default Messages;
