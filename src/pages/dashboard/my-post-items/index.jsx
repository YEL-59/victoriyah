import { useState } from "react";

import Postcard from "@/components/dashboard/my-post-items/postcard";
import ExchangeProductDetails from "@/components/dashboard/shared/exchange-product-details";
import UpdateDetails from "@/components/dashboard/shared/update-details";
import {
  useGetDashboardFavourites,
  useGetHomeFeaturedDetails,
} from "@/hook/home.hook";
import { useGetFeaturedList } from "@/hook/my-featuredlist.hook";

const MyPostItems = () => {
  const [postPage, setPostPage] = useState(1);
  const [favPage, setFavPage] = useState(1);

  const { data: postData, isLoading: isPostLoading } =
    useGetFeaturedList(postPage);

  const { data: favData, isLoading: isFavLoading } =
    useGetDashboardFavourites(favPage);

  const { products: postItems = [], pagination: postPagination = {} } =
    postData || {};
  const { products: favItems = [], pagination: favPagination = {} } =
    favData || {};

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
  };
  const lengthfav = favItems.length;
  console.log(lengthfav);
  console.log({ setSelectedItem });
  const { data, isLoading, isError } = useGetHomeFeaturedDetails(
    selectedItem?.id,
    { enabled: !!selectedItem?.id } // only fetch when ID exists
  );

  console.log("the details data", data);
  return (
    <>
      {/* 🔷 My Post Items Section */}
      <section className="mb-12">
        <h3 className="text-3xl font-semibold text-[#315215]">My Post Items</h3>

        {isPostLoading ? (
          <p className="mt-4">Loading...</p>
        ) : (
          <>
            {postItems.length === 0 ? (
              <p className="text-center col-span-full">
                You haven't posted any items yet.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
                {postItems.map((item) => (
                  <Postcard
                    key={item.id}
                    favourited={item.is_favorite}
                    {...item}
                    onCardClick={() => handleCardClick(item)}
                    onEditClick={() => handleEditClick(item)}
                  />
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => setPostPage((p) => Math.max(p - 1, 1))}
                disabled={postPage === 1}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Prev
              </button>
              <span className="px-4 py-2">Page {postPage}</span>
              <button
                onClick={() =>
                  setPostPage((p) =>
                    Math.min(p + 1, postPagination?.last_page || 1)
                  )
                }
                disabled={postPage === postPagination?.last_page}
                className="px-4 py-2 border rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </>
        )}
      </section>

      {/* ❤️ Favorite Items Section */}
      <section>
        <h3 className="text-3xl font-semibold text-[#315215]">
          My Favorite Items
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6">
                {favItems.map((item) => (
                  <Postcard
                    key={item.id}
                    favourited={item.is_favorite}
                    address={item.address}
                    {...item}
                    onCardClick={() => handleCardClick(item)}
                    onEditClick={() => handleEditClick(item)}
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
      </section>

      {/* 🔁 Modals */}
      <ExchangeProductDetails
        isOpen={isExchangeModalOpen}
        onClose={() => setIsExchangeModalOpen(false)}
        item={selectedItem}
      />
      <UpdateDetails
        isOpen={isUpdateModalOpen}
        onClose={() => setIsUpdateModalOpen(false)}
        item={selectedItem}
      />
    </>
  );
};

export default MyPostItems;
