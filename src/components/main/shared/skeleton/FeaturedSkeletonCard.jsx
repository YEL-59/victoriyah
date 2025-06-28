const FeaturedSkeletonCard = () => {
  return (
    <div className="rounded-xl border shadow-sm p-3 bg-white animate-pulse space-y-3">
      {/* Image Placeholder */}
      <div className="h-40 w-full bg-gray-200 rounded-md" />

      {/* Title */}
      <div className="h-4 bg-gray-200 rounded w-3/4" />

      {/* Condition & Location */}
      <div className="flex items-center justify-between">
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-1/4" />
      </div>

      {/* Time/Date */}
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
};

export default FeaturedSkeletonCard;
