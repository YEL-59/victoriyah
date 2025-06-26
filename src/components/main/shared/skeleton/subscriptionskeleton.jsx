const CardSkeleton = () => {
  return (
    <div className="w-full animate-pulse">
      <div className="bg-[#F5F4F2] p-4 rounded-lg mb-5">
        <div className="h-6 bg-gray-300 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-1"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
      <div className="h-5 bg-gray-300 rounded w-1/4 mb-2"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
      <div className="mt-4 h-10 bg-gray-300 rounded"></div>
    </div>
  );
};

export default CardSkeleton;
