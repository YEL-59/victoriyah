import { useState, useRef, useEffect } from "react";
import avatar from "../../../assets/person.png";
import avatar2 from "../../../assets/person2.png";
import { Image, Paperclip } from "lucide-react";

const users = [
  { name: "Mary Freund", img: avatar, id: 1 },
  { name: "Katie Sims", img: avatar2, id: 2 },
  { name: "Kathy Pacheco", img: avatar, id: 3 },
  { name: "David Elson", img: avatar2, id: 4 },
];

function Messages() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState({});
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages[selectedUser.id]]);

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages((prev) => ({
        ...prev,
        [selectedUser.id]: [
          ...(prev[selectedUser.id] || []),
          { text: input, sender: "You", type: "text" },
        ],
      }));
      setInput("");
      setTimeout(() => {
        setMessages((prev) => ({
          ...prev,
          [selectedUser.id]: [
            ...(prev[selectedUser.id] || []),
            {
              text: "Thanks for your message!",
              sender: selectedUser.name,
              type: "text",
            },
          ],
        }));
      }, 1000);
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
        <div className="mt-6 md:mt-8 lg:mt-10 space-y-5 md:space-y-7">
          {users.map((user) => (
            <div
              key={user.id}
              className={`flex items-center gap-5 p-2 rounded cursor-pointer ${
                selectedUser.id === user.id
                  ? "bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full">
                <img src={user.img} alt="image" />
              </div>
              <div className="space-y-2">
                <p className="font-semibold text-base md:text-lg text-[#2f2f2f]">
                  {user.name}
                </p>
                <p className="text-base md:text-lg text-[#757575]">
                  Hello, How are you...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-5">
            <div className="w-12 md:w-16 h-16 md:h-16 rounded-full">
              <img src={selectedUser.img} alt="image" />
            </div>

            <div>
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold leading-[132%] text-[#315215] mb-2">
                {selectedUser.name}
              </h2>
              <p className="text-base md:text-lg text-[#757575]">
                Hello, How are you?
              </p>
            </div>
          </div>

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
          {(messages[selectedUser.id] || []).map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "You" ? "justify-end" : "items-start space-x-3"
              } mb-4`}
            >
              {msg.sender !== "You" && (
                <div className="w-10 h-10 bg-gray-300 rounded-full">
                  <img src={selectedUser.img} alt="" />
                </div>
              )}
              <div
                className={`px-6 py-2.5 shadow max-w-sm ${
                  msg.sender === "You"
                    ? "bg-[#314215] text-white rounded-tr-none rounded-tl-lg rounded-br-lg rounded-bl-lg"
                    : "bg-white rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-lg"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef}></div>
        </div>
        {/* Message Input */}
        <div className="p-4 border-t flex gap-7 items-center">
          <div className="flex-shrink-0 flex items-center gap-2.5">
            <Paperclip />
            <Image />
          </div>
          <input
            type="text"
            placeholder="Write your message"
            className="flex-1 py-4 px-6 border rounded-[32px]"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            className="p-4 bg-[#314215] text-white rounded-full"
            onClick={sendMessage}
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
