import { Button } from "@/components/ui/button";

import avatarImg from "../../../assets/avatar.png";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    <div>
      <Tabs defaultValue="incoming" className="w-full">
        <TabsList className="border-b border-[#E8E8E8] flex flex-wrap md:flex-nowrap justify-center md:justify-start w-fit bg-transparent mb-6 md:mb-8 lg:mb-10">
          {["incoming", "confirm", "cancel"].map((value, index) => (
            <TabsTrigger
              key={value}
              value={value}
              className="data-[state=active]:shadow-none data-[state=active]:font-semibold text-lg md:text-xl lg:text-2xl leading-[132%] tracking-[-0.48px] data-[state=active]:border-b data-[state=active]:border-[#315215] py-3 rounded-none"
            >
              {
                ["Incoming Request", "Confirmed Request", "Cancel Request"][
                  index
                ]
              }
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent
          value="incoming"
          className="grid md:grid-cols-2 gap-[18px]"
        >
          {cardData?.map((item) => (
            <Card
              key={item.id}
              className="border border-[#E8E8E8] rounded-[24px] shadow-none"
            >
              <div className="p-8 md:p-6 sm:p-4">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-6 sm:gap-4">
                    <div className="w-16 h-16 rounded-full sm:w-12 sm:h-12">
                      <img
                        src={item.user.avatar}
                        alt="image"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold leading-[132%] tracking-[-0.48px] text-[#315215] mb-3 sm:text-xl">
                        {item.user.name}
                      </h3>
                      <p className="text-lg leading-[164%] text-[#757575] sm:text-base">
                        {item.user.timestamp}
                      </p>
                    </div>
                  </div>
                  <Button className="text-lg font-semibold leading-[132%] tracking-[-0.48px] text-[#315215] bg-transparent shadow-none border-none active:scale-95 duration-300 sm:text-base">
                    View more
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 rounded-[12px] bg-[#F4FFE5] border border-[#E8E8E8] mt-8 flex-wrap gap-4">
                  <div className="w-full sm:w-auto">
                    <p className="text-[#757575] text-lg leading-[164%] mb-1 sm:text-base">
                      Item Offered
                    </p>
                    <h3 className="text-[#315215] text-xl font-medium leading-[132%] tracking-[-0.4px] sm:text-lg">
                      {item.itemOffered}
                    </h3>
                  </div>
                  <div className="w-full sm:w-auto">
                    <p className="text-[#757575] text-lg leading-[164%] mb-1 sm:text-base">
                      Item Wanted
                    </p>
                    <h3 className="text-[#315215] text-xl font-medium leading-[132%] tracking-[-0.4px] sm:text-lg">
                      {item.itemWanted}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-6 sm:p-4 border-t border-[#E8E8E8]">
                <p className="text-[#757575] text-lg leading-[164%] mb-8 sm:text-base">
                  {item.message}
                </p>

                <div className="flex items-center gap-6 flex-col sm:flex-row">
                  <Button className="bg-transparent border shadow-none border-[#96E437] text-lg font-semibold leading-[164%] capitalize !text-[#315215] rounded-[24px] w-full py-6 sm:py-4 sm:text-base">
                    Decline
                  </Button>
                  <Button className="bg-[#96E437] text-lg font-semibold leading-[164%] capitalize text-[#315215] rounded-[24px] w-full py-6 sm:py-4 sm:text-base">
                    Accept
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="confirm">Change your password here.</TabsContent>
        <TabsContent value="cancel">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}

export default ExchangeRequest;
