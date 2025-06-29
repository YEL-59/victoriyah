import img1 from "@/assets/featuredimg1.png";
import Favouritecard from "@/components/dashboard/favourite/favouritecard";
import ExchangeProductDetails from "@/components/dashboard/shared/exchange-product-details";
import { useGetDashboardFavourites } from "@/hook/home.hook";
import { useState } from "react";

function Favourite() {
  const [postPage, setPostPage] = useState(1);
  const [favPage, setFavPage] = useState(1);
  const [isExchangeModalOpen, setIsExchangeModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const { data: favData, isLoading: isFavLoading } =
    useGetDashboardFavourites(favPage);

  const { products: favItems = [], pagination: favPagination = {} } =
    favData || {};
  const handleCardClick = (item) => {
    setSelectedItem(item);
    setIsExchangeModalOpen(true);
  };
  return (
    <div>
      <h3 className="text-3xl leading-[132%] font-semibold tracking-[-0.48px] text-[#315215]">
        My Favourite Items
      </h3>

      {isFavLoading ? (
        <p className="mt-4">Loading...</p>
      ) : (
        <>
          {favItems.length === 0 ? (
            <p className="text-center col-span-full">
              You haven't favorited any items yet.
            </p>
          ) : (
            <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 xl:grid-rows-4 gap-4 mt-6">
              {favItems.map((item) => (
                <Favouritecard
                  key={item.id}
                  isFavorited={item.is_favorite}
                  {...item}
                  onCardClick={() => handleCardClick(item)}
                  // onEditClick={() => handleEditClick(item)}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => setFavPage((p) => Math.max(p - 1, 1))}
              disabled={favPage === 1}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-4 py-2">Page {favPage}</span>
            <button
              onClick={() =>
                setFavPage((p) =>
                  Math.min(p + 1, favPagination?.last_page || 1)
                )
              }
              disabled={favPage === favPagination?.last_page}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* 🔁 Modals */}
      <ExchangeProductDetails
        isOpen={isExchangeModalOpen}
        onClose={() => setIsExchangeModalOpen(false)}
        item={selectedItem}
      />
    </div>
  );
}

export default Favourite;
