import React from "react";
import leftArrow from "@/assets/icons/left-arrow.svg";
import rightArrow from "@/assets/icons/right-arrow.svg";
import cardImage from "@/assets/how-it-work.png";
import dotLine from "@/assets/Line.png";
import { useGetHome } from "@/hook/home.hook";

function HowItWorks() {
  const { howItWorksData, isLoading, isError } = useGetHome();
  const steps = howItWorksData?.steps || [];
  return (
    <div className="py-28">
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] h-full mx-auto flex flex-col gap-10">
        <h1 className="text-center text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[132%] tracking-[-0.48px] text-foreground">
          How It Works
        </h1>

        {/* Header Text */}
        <div className="flex justify-between flex-wrap sm:flex-nowrap gap-6">
          <div className="flex flex-col gap-2 w-[90%] sm:w-[80%] lg:w-1/2">
            <h4 className="text-sm sm:text-base lg:text-lg leading-[170%] tracking-[-0.4px] text-[#457B10]">
              Amplifying Voices, Building Trust.
            </h4>
            <h1 className="w-full text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[132%] tracking-[-0.48px] text-foreground">
              {howItWorksData?.title || "Loading..."}
            </h1>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex justify-between 2xl:flex-row flex-col gap-12 lg:gap-16 2xl:gap-20 w-full">
          {/* Image Card */}
          <div className="bg-gradient-to-t from-[#ACE267] via-[#ACE267] to-[rgba(255,255,255,0.01)] blur-0 h-[430px] sm:h-[470px] md:h-[520px] lg:h-[595px] w-full sm:w-[500px] md:w-[550px] lg:w-[624px] aspect-[550/520] lg:aspect-[624/595] mx-auto rotate-180 rounded-[24px] relative">
            <img
              src={howItWorksData?.image}
              alt="how it works"
              className="rounded-[24px] absolute top-[10%] left-[10%] w-[80%] h-[80%] z-10 rotate-180 object-contain"
            />
          </div>

          {/* Steps */}
          <div className="w-full">
            <div className="flex flex-col w-full h-full justify-center items-start 2xl:items-center gap-8 sm:12 lg:gap-16 relative">
              {steps.map((step, index) => (
                <div className="flex gap-6" key={index}>
                  <div className="bg-[#B5F169] text-foreground flex items-center justify-center py-4 px-5 rounded-full h-fit w-fit">
                    <p className="text-[28px] font-bold leading-[130%] tracking-[-0.8px]">
                      {index + 1}
                    </p>
                  </div>
                  <div>
                    <h1 className="text-[24px] sm:text-[32px] lg:text-[40px] font-medium leading-[130%] tracking-[-2px]">
                      {step.title}
                    </h1>
                    <p
                      className="text-sm sm:text-base lg:text-lg leading-[164%]"
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </div>
                </div>
              ))}

              <div className="absolute z-[-1] left-[6%] top-[10%] mb-2 hidden 2xl:block">
                <img src={dotLine} alt="line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
