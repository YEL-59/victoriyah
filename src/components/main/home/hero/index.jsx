import bgImage from "@/assets/hero-image.png";
import Filter from "./filter";
import { useGetHome } from "@/hook/home.hook";

function Hero() {
  const { heroData, isLoading } = useGetHome();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div
      className="relative w-full min-h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-[90%] sm:w-[90%] lg:w-1/2 mx-auto flex flex-col gap-2 max-[500px]:mb-28">
        <h1 className="text-[40px] min-[500px]:text-[48px] sm:text-[56px] lg:text-[64px] xl:text-[72px] leading-[132%] tracking-[-0.72px] font-semibold text-[#FFF] text-center">
          {heroData?.title || "Trade What You Don’t Need"}
        </h1>
        <p className="text-sm sm:text-base lg:text-lg leading-[164%] text-[#FFF] opacity-40 text-center">
          <span
            dangerouslySetInnerHTML={{
              __html:
                heroData.content ||
                "Trade what you don’t need, for what you do need. Join the community of like-minded people who are trading their items for something they really want.",
            }}
          />
        </p>
      </div>
      <div className="absolute bottom-[-12%] sm:bottom-[-8%] z-10 w-[800px]">
        <Filter />
      </div>
    </div>
  );
}

export default Hero;
