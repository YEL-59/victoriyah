import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useGetExchangeRequestDetails } from "@/hook/home.hook"; // make sure this fetches the `data.data` part from the response

function ExchangeProductDetailsDashboard({ isOpen, onClose, itemId }) {
  const { data, isLoading, isError } = useGetExchangeRequestDetails(itemId);

  if (!itemId) return null;
  if (isLoading) return <p className="text-center p-6">Loading...</p>;
  if (isError || !data)
    return <p className="text-center p-6">Failed to load exchange details.</p>;

  const {
    name,
    description,
    condition,
    category,
    message,
    images = [],
    created_at,
    owner,
  } = data;
  console.log("Images array from API: ", images);
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-5xl p-6 lg:p-10 overflow-auto max-h-[90vh]">
        <h1>Product Details</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="basis-[60%] flex flex-col gap-6">
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <img
                src={owner?.avatar}
                alt="Owner Avatar"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-xl font-semibold text-[#315215]">
                  {owner?.name}
                </h2>
                <p className="text-sm text-[#757575]">{created_at}</p>
              </div>
            </div>

            {/* Product Info */}
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-sm text-[#8C8C8C]">Product Name</p>
                <p className="text-base text-[#2F2F2F]">{name}</p>
              </div>
              <div>
                <p className="text-sm text-[#8C8C8C]">Condition</p>
                <p className="text-base text-[#2F2F2F]">{condition}</p>
              </div>
              <div>
                <p className="text-sm text-[#8C8C8C]">Category</p>
                <p className="text-base text-[#2F2F2F]">{category}</p>
              </div>
              <div>
                <p className="text-sm text-[#8C8C8C]">Owner Email</p>
                <p className="text-base text-[#2F2F2F]">{owner?.email}</p>
              </div>
              <div>
                <p className="text-sm text-[#8C8C8C]">Phone</p>
                <p className="text-base text-[#2F2F2F]">{owner?.phone}</p>
              </div>
              <div>
                <p className="text-sm text-[#8C8C8C]">Address</p>
                <p className="text-base text-[#2F2F2F]">{owner?.address}</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-[#F4F4F4] p-4 rounded-xl mb-6">
              <p className="text-sm text-[#8C8C8C] mb-1">Description</p>
              <p className="text-base text-[#2F2F2F]">{description}</p>
            </div>

            {/* Exchange Message */}
            <div className="bg-[#F0FFF0] p-4 rounded-xl mb-6">
              <p className="text-sm text-[#8C8C8C] mb-1">Exchange Message</p>
              <p className="text-base text-[#2F2F2F]">{message}</p>
            </div>
          </div>

          {/* Images */}
          <div className="basis-[40%] flex flex-col gap-4">
            <p className="text-[#A3A3A3] text-lg mb-4">Product Images</p>
            <div className="flex  gap-4">
              {images.length > 0 ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-2 w-full gap-4">
                  {images.slice(0, 4).map((img, idx) => (
                    <img
                      key={idx}
                      src={
                        img?.startsWith("http")
                          ? img
                          : `https://admin.gogobarter.com/${img}`
                      }
                      alt={`product-img-${idx}`}
                      className="w-[200px] h-[200px] rounded-xl object-cover border border-gray-200"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://via.placeholder.com/200x200";
                      }}
                    />
                  ))}
                </div>
              ) : (
                <p className="text-gray-500">No images available.</p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ExchangeProductDetailsDashboard;
