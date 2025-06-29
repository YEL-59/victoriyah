import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useGetHomeFeaturedDetails } from "@/hook/home.hook";
import Deleteicon from "@/assets/icons/delete-icon";
import Editicon from "@/assets/icons/edit-icon";

function ExchangeProductDetails({ isOpen, onClose, item }) {
  const { data, isLoading, isError } = useGetHomeFeaturedDetails(item?.id);

  if (!item) return null;

  if (isLoading) return <p>Loading...</p>;
  if (isError || !data) return <p>Failed to load product details.</p>;

  const { product } = data;
  const { name, description, images = [], created_at, owner } = product;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-[1390px] p-4 sm:p-6 lg:p-8 flex flex-col lg:flex-row justify-between gap-8 border border-[#E8E8E8] bg-[#fff] overflow-auto">
        {/* Left Panel */}
        <div className="basis-[60%] flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-[#8C8C8C] text-lg">Item Offered</p>
              <p className="text-[#2F2F2F]">{product.name}</p>
            </div>
            <div>
              <p className="text-[#8C8C8C] text-lg">Email</p>
              <p className="text-[#2F2F2F]">{product.owner.email}</p>
            </div>
            <div>
              <p className="text-[#8C8C8C] text-lg">Phone</p>
              <p className="text-[#2F2F2F]">{product.owner.phone}</p>
            </div>
            <div>
              <p className="text-[#8C8C8C] text-lg">Phone</p>
              <p className="text-[#2F2F2F]">{product.owner.address}</p>
            </div>

            <div>
              <p className="text-[#8C8C8C] text-lg">Created at</p>
              <p className="text-[#2F2F2F]">{product.created_at}</p>
            </div>
          </div>

          <div className="bg-[#F2F2F2] p-6 rounded-3xl h-full">
            <p className="text-[#8C8C8C] text-lg">Item Description</p>
            <p className="text-[#2F2F2F]">{product.description}</p>
          </div>
        </div>

        {/* Right Panel */}
        <div className="basis-[40%] flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <p className="text-[#A3A3A3] text-lg">Product Images</p>
            {/* <div className="flex items-center gap-3">
              <Deleteicon className="text-gray-400 cursor-pointer" />
              <Editicon className="text-gray-400 cursor-pointer" />
            </div> */}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {product.images.slice(0, 4).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`product-img-${idx}`}
                className="w-full rounded-lg h-[240px] object-cover"
              />
            ))}
          </div>

          {product.display_image && (
            <div>
              <img
                src={product.display_image}
                alt="display"
                className="w-full rounded-lg h-[240px] object-cover"
              />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ExchangeProductDetails;
