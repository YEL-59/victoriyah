import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  useAcceptExchangeRequest,
  useCancelExchangeRequest,
  useExchangeProductList,
} from "@/hook/postitem.hook";
import ExchangeProductDetails from "@/components/dashboard/shared/exchange-product-details";
import ExchangeProductDetailsdashboard from "@/components/dashboard/shared/ExchangeProductDetailsdashboard";

function ExchangeRequest() {
  const [tab, setTab] = useState("incoming");

  const statusMap = {
    incoming: "pending",
    confirm: "accepted",
    cancel: "rejected",
  };

  const { exchange_productLists, isLoading } = useExchangeProductList(
    statusMap[tab]
  );
  const { acceptRequest, isPending: isAccepting } = useAcceptExchangeRequest();
  const { cancelRequest, isPending: isCanceling } = useCancelExchangeRequest();

  const [acceptingId, setAcceptingId] = useState(null);
  const [cancelingId, setCancelingId] = useState(null);

  const { mutateAsync: acceptRequestAsync } = useAcceptExchangeRequest();

  const { mutateAsync: cancelRequestAsync } = useCancelExchangeRequest();

  const handleAccept = async (id) => {
    setAcceptingId(id);
    try {
      await acceptRequestAsync(id);
    } finally {
      setAcceptingId(null);
    }
  };

  const handleCancel = async (id) => {
    setCancelingId(id);
    try {
      await cancelRequestAsync(id);
    } finally {
      setCancelingId(null);
    }
  };

  const [isExchangeModalOpen, setIsExchangeModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItemId(item.id);
    setIsExchangeModalOpen(true);
  };

  const renderCards = () => {
    if (isLoading) {
      return <p className="text-center col-span-2">Loading...</p>;
    }

    if (!exchange_productLists?.length) {
      return <p className="text-center col-span-2">No requests found.</p>;
    }

    return exchange_productLists.map((item) => (
      <Card
        key={item.id}
        className="border border-[#E8E8E8] rounded-[24px] shadow-none"
      >
        <div className="p-8 md:p-6 sm:p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-6 sm:gap-4">
              <div className="w-16 h-16 rounded-full sm:w-12 sm:h-12">
                <img
                  src={item.requester_avatar}
                  alt="avatar"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-[#315215] mb-3 sm:text-xl">
                  {item.requester_name}
                </h3>
                <p className="text-lg text-[#757575] sm:text-base">
                  {item.requested_at}
                </p>
              </div>
            </div>
            <Button
              onClick={() => handleCardClick(item)}
              className="text-lg font-semibold text-[#315215] bg-transparent shadow-none border-none active:scale-95 duration-300 sm:text-base"
            >
              View Details
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 rounded-[12px] bg-[#F4FFE5] border border-[#E8E8E8] mt-8 flex-wrap gap-4">
            <div className="w-full sm:w-auto">
              <p className="text-[#757575] text-lg mb-1 sm:text-base">
                Item Offered
              </p>
              <h3 className="text-[#315215] text-xl font-medium sm:text-lg">
                {item.item_offered}
              </h3>
            </div>
            <div className="w-full sm:w-auto">
              <p className="text-[#757575] text-lg mb-1 sm:text-base">
                Item Wanted
              </p>
              <h3 className="text-[#315215] text-xl font-medium sm:text-lg">
                {item.item_wanted}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-6 sm:p-4 border-t border-[#E8E8E8]">
          <p className="text-[#757575] text-lg mb-8 sm:text-base">
            {item.message}
          </p>

          {tab === "incoming" ? (
            <div className="flex items-center gap-6 flex-col sm:flex-row">
              <Button
                onClick={() => handleAccept(item.id)}
                disabled={acceptingId === item.id}
                className="bg-[#96E437] text-lg font-semibold text-[#315215] rounded-[24px] w-full py-6 sm:py-4 sm:text-base"
              >
                {acceptingId === item.id ? "Accepting..." : "Accept"}
              </Button>
              <Button
                onClick={() => handleCancel(item.id)}
                disabled={cancelingId === item.id}
                className="bg-[#F44336] text-lg font-semibold text-white rounded-[24px] w-full py-6 sm:py-4 sm:text-base"
              >
                {cancelingId === item.id ? "Canceling..." : "Decline"}
              </Button>
            </div>
          ) : (
            <div className="text-center text-[#757575] font-medium text-lg sm:text-base">
              {tab === "confirm"
                ? "✔️ Request Accepted"
                : "❌ Request Declined"}
            </div>
          )}
        </div>
      </Card>
    ));
  };

  return (
    <div>
      <Tabs
        defaultValue="incoming"
        value={tab}
        onValueChange={(value) => setTab(value)}
        className="w-full"
      >
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

        <TabsContent value={tab} className="grid md:grid-cols-2 gap-[18px]">
          {renderCards()}
        </TabsContent>
      </Tabs>

      <ExchangeProductDetailsdashboard
        isOpen={isExchangeModalOpen}
        onClose={() => setIsExchangeModalOpen(false)}
        itemId={selectedItemId}
      />
    </div>
  );
}

export default ExchangeRequest;
