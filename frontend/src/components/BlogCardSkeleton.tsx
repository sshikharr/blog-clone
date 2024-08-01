const BlogCardSkeleton = () => {
  return (
    <div className="w-full bg-gray-300 p-4 rounded-lg animate-pulse">
      <div className="h-8 bg-gray-400 rounded mb-2"></div>
      <div className="h-8 bg-gray-400 rounded mb-2"></div>
      <div className="h-8 bg-gray-400 rounded mb-2"></div>
      <div className="h-8 bg-gray-400 rounded mb-2"></div>
    </div>
  );
};

export default BlogCardSkeleton;