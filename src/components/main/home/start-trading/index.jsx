import { useGetHome } from "@/hook/home.hook";

const StartTrading = () => {
  const { tradingData, isLoading } = useGetHome();

  return (
    <div className="bg-primary text-foreground py-28">
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto flex flex-col gap-8">
        <div className="w-full sm:w-1/2 mx-auto text-center gap-4">
          <h1 className="text-center text-[32px] sm:text-[40px] lg:text-[48px] font-bold leading-[132%] tracking-[-0.48px] text-foreground">
            {tradingData?.title || "Start Trading Now!"}
          </h1>
          <p
            className="text-sm sm:text-base lg:text-lg leading-[164%] text-center"
            dangerouslySetInnerHTML={{
              __html:
                tradingData?.description ||
                "Join our community and start trading your items today. It's easy, secure, and free!",
            }}
          />
        </div>

        {/* Uncomment and style this if needed */}
        {/* <div className='flex items-center justify-center z-[5]'>
          <Button className='cursor-pointer text-sm sm:text-base lg:text-lg font-semibold leading-[164%] bg-[#355817] hover:text-[#355817] hover:border-[#355817] hover:border text-[#FFF] rounded-[99px] w-max'>
            Post Your First Trade
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default StartTrading;
