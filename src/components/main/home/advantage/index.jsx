import { useGetHome } from "@/hook/home.hook";

function Advantage() {
  const { serviceData, isLoading, isError } = useGetHome();
  console.log({ serviceData, isLoading, isError });
  return (
    <div className="bg-primary text-foreground py-28">
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto flex items-center justify-center flex-col sm:flex-row gap-8">
        {isLoading ? (
          <p className="text-center text-red-500">Loading...</p>
        ) : isError ? (
          <p className="text-center text-red-500">Something went wrong!</p>
        ) : (
          serviceData?.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <div className="flex flex-col gap-3 items-center">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-[132%] tracking-[-0.48px] text-center">
                  {item.title}
                </h2>
                <p
                  className="text-base sm:text-lg leading-[164%] text-center"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Advantage;
