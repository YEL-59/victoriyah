import { Button } from "@/components/ui/button";

import avatarImg from "../../../assets/avatar.png";
import { Card } from "@/components/ui/card";

const cardData = [
  {
    id: 1,
    user: {
      name: "Iva Ryan",
      avatar: avatarImg,
      timestamp: "2 hours ago",
    },
    itemOffered: "iPhone 12 Pro Max",
    itemWanted: "MacBook Pro",
    message:
      "I'm interested in your MacBook Pro. Would you like to exchange it for my iPhone?",
  },
  {
    id: 2,
    user: {
      name: "John Doe",
      avatar: avatarImg,
      timestamp: "5 hours ago",
    },
    itemOffered: "Samsung Galaxy S21",
    itemWanted: "iPad Pro",
    message:
      "Would you be open to trading your iPad Pro for my Samsung Galaxy S21?",
  },
];

function ExchangeRequest() {
  return (
    <div className="grid md:grid-cols-2 gap-[18px]">
      {cardData?.map((item) => (
        <Card
          key={item.id}
          className="border border-[#E8E8E8] rounded-[24px] shadow-none"
        >
          <div className="p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full">
                  <img src={item.user.avatar} alt="image" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold leading-[132%] tracking-[-0.48px] text-[#315215] mb-3">
                    {item.user.name}
                  </h3>
                  <p className="text-lg leading-[164%] text-[#757575]">
                    {item.user.timestamp}
                  </p>
                </div>
              </div>
              <Button className="text-lg font-semibold leading-[132%] tracking-[-0.48px] text-[#315215] bg-transparent shadow-none border-none active:scale-95 duration-300">
                View more
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 rounded-[12px] bg-[#F4FFE5] border border-[#E8E8E8] mt-8">
              <div>
                <p className="text-[#757575] text-lg leading-[164%] mb-1">
                  Item Offered
                </p>
                <h3 className="text-[#315215] text-xl font-medium leading-[132%] tracking-[-0.4px]">
                  {item.itemOffered}
                </h3>
              </div>
              <div>
                <p className="text-[#757575] text-lg leading-[164%] mb-1">
                  Item Wanted
                </p>
                <h3 className="text-[#315215] text-xl font-medium leading-[132%] tracking-[-0.4px]">
                  {item.itemWanted}
                </h3>
              </div>
            </div>
          </div>

          <div className="p-8 border-t border-[#E8E8E8]">
            <p className="text-[#757575] text-lg leading-[164%] mb-8">
              {item.message}
            </p>

            <div className="flex items-center gap-6">
              <Button className="bg-transparent border shadow-none border-[#96E437] text-lg font-semibold leading-[164%]capitalize !text-[#315215] rounded-[24px] w-full py-6">
                Decline
              </Button>
              <Button className="bg-[#96E437] text-lg font-semibold leading-[164%]capitalize text-[#315215] rounded-[24px] w-full py-6">
                Accept
              </Button>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ExchangeRequest;
