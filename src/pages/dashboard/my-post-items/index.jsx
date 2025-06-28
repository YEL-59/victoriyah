import radio from "../../../assets/radio.png";
import game from "../../../assets/game.png";
import player from "../../../assets/player.png";
import img1 from "@/assets/featuredimg1.png";
import Postcard from "@/components/dashboard/my-post-items/postcard";
import { useState } from "react";
import { Link } from "react-router";
import ExchangeProductDetails from "@/components/dashboard/shared/exchange-product-details";
import UpdateDetails from "@/components/dashboard/shared/update-details";
import { useGetFeaturedList } from "@/hook/my-featuredlist.hook";

function MyPostItems() {
  // const myPostItems = [
  //   {
  //     id: 1,
  //     image: img1,
  //     condition: "New",
  //     name: "Premium Saddle",
  //     price: "$399.99",
  //     location: "New York, USA",
  //     time: "5 minutes ago",
  //     badgeText: "For Sale",
  //     isFavorited: true,
  //   },
  //   {
  //     id: 2,
  //     image: radio,
  //     condition: "Used",
  //     name: "Leather Bridle",
  //     price: "$89.99",
  //     location: "New York, USA",
  //     time: "1 hour ago",
  //     badgeText: "Swap or Sell",
  //     isFavorited: false,
  //   },

  // ];

  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetFeaturedList(page);
  const { products = [], pagination = {} } = data || {};

  const [isExchangeModalOpen, setIsExchangeModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsExchangeModalOpen(true);
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsUpdateModalOpen(true);
    console.log("edit button click");
  };

  const handleCloseExchangeModal = () => {
    setIsExchangeModalOpen(false);
    setSelectedItem(null);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <div>
        <h3 className="text-3xl leading-[132%] font-semibold tracking-[-0.48px] text-[#315215]">
          My Post Items
        </h3>

        <div className=" mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
            {products?.map((item) => (
              <Postcard
                key={item.id}
                {...item}
                onCardClick={() => handleCardClick(item)}
                onEditClick={() => handleEditClick(item)}
              />
            ))}
          </div>
          {/* Pagination Buttons */}
          <div className="flex justify-center mt-6 gap-2">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-4 py-2">{`Page ${page} of ${
              pagination.last_page || 1
            }`}</span>
            <button
              onClick={() =>
                setPage((p) => Math.min(p + 1, pagination.last_page))
              }
              disabled={page === pagination.last_page}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Exchange modal */}
      <ExchangeProductDetails
        isOpen={isExchangeModalOpen}
        onClose={handleCloseExchangeModal}
        item={selectedItem}
      />

      {/* UpdateDetails modal */}
      {/* <UpdateDetails
          isOpen={isUpdateModalOpen}
          onClose={handleCloseUpdateModal}
        /> */}
    </>
  );
}

export default MyPostItems;
