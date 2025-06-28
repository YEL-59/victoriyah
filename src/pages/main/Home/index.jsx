import { useState } from "react";
import { useGetHome, useGetHomeFeatured } from "@/hook/home.hook";
import Hero from "@/components/main/home/hero";
import Advantage from "@/components/main/home/advantage";
import HowItWorks from "@/components/main/home/how-it-works";
import StartTrading from "@/components/main/home/start-trading";
import ellipse from "@/assets/icons/home-ellipse.svg";
import Featuredcard from "@/components/main/home/featuredcard";
import { Button } from "@/components/ui/button";

const Home = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useGetHomeFeatured(page);

  const featuredItems = data?.featured_items || [];
  const pagination = data?.featured_items_pagination;

  const handleNext = () => {
    if (pagination && page < pagination.last_page) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (pagination && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <>
      <Hero />
      <div className="pt-20 pb-20 px-4">
        <div className="container mx-auto flex justify-between items-center py-6 ">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
            Featured Items
          </h1>
          <p className="bg-transparent border-b-2 text-foreground py-2 px-4 sm:px-6 text-sm sm:text-base lg:text-lg font-normal">
            Browse all items
          </p>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : isError ? (
          <p className="text-center text-red-500">Something went wrong!</p>
        ) : (
          <>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredItems.map((item) => (
                <Featuredcard key={item.id} {...item} />
              ))}
            </div>

            <div className="container mx-auto flex justify-center gap-4 items-center mt-8">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={page === 1}
              >
                Previous
              </Button>
              <span className="text-foreground font-medium">
                Page {pagination?.current_page} of {pagination?.last_page}
              </span>
              <Button
                variant="outline"
                onClick={handleNext}
                disabled={page === pagination?.last_page}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>

      <Advantage />
      <HowItWorks />
      <div className="relative overflow-hidden shrink-0">
        <StartTrading />
        <img
          src={ellipse}
          alt="ellipse"
          className="absolute bottom-[-5%] z-[2] shrink-0 w-full"
        />
      </div>
    </>
  );
};

export default Home;
