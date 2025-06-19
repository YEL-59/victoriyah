import radio from "../../../assets/radio.png";
import game from "../../../assets/game.png";
import player from "../../../assets/player.png";
import img1 from "@/assets/featuredimg1.png";
import Postcard from "@/components/dashboard/my-post-items/postcard";
import { useState } from "react";
import { Link } from "react-router";
import ExchangeProductDetails from "@/components/dashboard/shared/exchange-product-details";
import UpdateDetails from "@/components/dashboard/shared/update-details";

function MyPostItems() {
  const MyPostItems = [
    {
      id: 1,
      image: img1,
      condition: "New",
      name: "Premium Saddle",
      price: "$399.99",
      location: "New York, USA",
      time: "5 minutes ago",
      badgeText: "For Sale",
      isFavorited: true,
    },
    {
      id: 2,
      image: radio,
      condition: "Used",
      name: "Leather Bridle",
      price: "$89.99",
      location: "New York, USA",
      time: "1 hour ago",
      badgeText: "Swap or Sell",
      isFavorited: false,
    },
    {
      id: 3,
      image: game,
      condition: "Like New",
      name: "Horse Riding Boots",
      price: "$120.00",
      location: "New York, USA",
      time: "2 hours ago",
      badgeText: "For Trade",
      isFavorited: true,
    },
    {
      id: 5,
      image: player,
      condition: "New",
      name: "Equestrian Helmet",
      price: "$150.00",
      location: "New York, USA",
      time: "3 hours ago",
      badgeText: "For Sale",
      isFavorited: false,
    },
    {
      id: 6,
      image: img1,
      condition: "New",
      name: "Premium Saddle",
      price: "$399.99",
      location: "New York, USA",
      time: "5 minutes ago",
      badgeText: "For Sale",
      isFavorited: true,
    },
    {
      id: 7,
      image: radio,
      condition: "Used",
      name: "Leather Bridle",
      price: "$89.99",
      location: "New York, USA",
      time: "1 hour ago",
      badgeText: "Swap or Sell",
      isFavorited: false,
    },
    {
      id: 8,
      image: game,
      condition: "Like New",
      name: "Horse Riding Boots",
      price: "$120.00",
      location: "New York, USA",
      time: "2 hours ago",
      badgeText: "For Trade",
      isFavorited: true,
    },
    {
      id: 9,
      image: player,
      condition: "New",
      name: "Equestrian Helmet",
      price: "$150.00",
      location: "New York, USA",
      time: "3 hours ago",
      badgeText: "For Sale",
      isFavorited: false,
    },
    {
      id: 10,
      image: img1,
      condition: "New",
      name: "Premium Saddle",
      price: "$399.99",
      location: "New York, USA",
      time: "5 minutes ago",
      badgeText: "For Sale",
      isFavorited: true,
    },
    {
      id: 11,
      image: radio,
      condition: "Used",
      name: "Leather Bridle",
      price: "$89.99",
      location: "New York, USA",
      time: "1 hour ago",
      badgeText: "Swap or Sell",
      isFavorited: false,
    },
    {
      id: 12,
      image: game,
      condition: "Like New",
      name: "Horse Riding Boots",
      price: "$120.00",
      location: "New York, USA",
      time: "2 hours ago",
      badgeText: "For Trade",
      isFavorited: true,
    },
    {
      id: 13,
      image: player,
      condition: "New",
      name: "Equestrian Helmet",
      price: "$150.00",
      location: "New York, USA",
      time: "3 hours ago",
      badgeText: "For Sale",
      isFavorited: false,
    },
  ];

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
          {MyPostItems.map((item) => (
            <Postcard
              key={item.id}
              {...item}
              onCardClick={() => handleCardClick(item)}
              onEditClick={() => handleEditClick(item)}
            />
          ))}
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
