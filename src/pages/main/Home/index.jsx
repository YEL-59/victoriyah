import { useState, useEffect, useRef } from "react";
import { useGetHome, useGetHomeFeatured } from "@/hook/home.hook";
import Hero from "@/components/main/home/hero";
import Advantage from "@/components/main/home/advantage";
import HowItWorks from "@/components/main/home/how-it-works";
import StartTrading from "@/components/main/home/start-trading";
import ellipse from "@/assets/icons/home-ellipse.svg";
import Featuredcard from "@/components/main/home/featuredcard";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"; // Spinner icon
import FeaturedSkeletonCard from "@/components/main/shared/skeleton/FeaturedSkeletonCard";

const Home = () => {
  const [page, setPage] = useState(1);
  const sectionRef = useRef(null);

  const { data, isLoading, isError, isFetching } = useGetHomeFeatured(page);

  const featuredItems = data?.featured_items || [];
  const pagination = data?.featured_items_pagination;
  console.log({ featuredItems, pagination });
  // Scroll to Featured Items section when page changes
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [page]);

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
      <div ref={sectionRef} className="pt-20 pb-20 px-4">
        <div className="container mx-auto flex justify-between items-center py-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-foreground">
            Featured Items
          </h1>
          <p className="bg-transparent border-b-2 text-foreground py-2 px-4 sm:px-6 text-sm sm:text-base lg:text-lg font-normal">
            Browse all items
          </p>
        </div>

        {isError ? (
          <p className="text-center text-red-500">Something went wrong!</p>
        ) : isLoading ? (
          <div className="flex justify-center items-center h-40">
            <Loader2 className="h-8 w-8 animate-spin text-gray-500" />
          </div>
        ) : (
          <>
            {isLoading ||
              (isFetching && (
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  {Array.from({ length: 12 }).map((_, index) => (
                    <FeaturedSkeletonCard key={index} />
                  ))}
                </div>
              ))}

            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredItems?.map((item) => (
                <Featuredcard
                  key={item.id}
                  isFavorited={item.is_favorite}
                  {...item}
                />
              ))}
            </div>

            <div className="container mx-auto flex justify-center gap-4 items-center mt-8">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={page === 1 || isFetching}
              >
                Previous
              </Button>
              <span className="text-foreground font-medium">
                Page {pagination?.current_page} of {pagination?.last_page}
              </span>
              <Button
                variant="outline"
                onClick={handleNext}
                disabled={page === pagination?.last_page || isFetching}
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
