import { Appbar } from "./Appbar";

export const FullBlogSkeleton = () => {
    return (
        <>
            <Appbar />
            <div className="flex flex-row w-screen justify-center mt-6 gap-10">
                <div className="lg:w-4/6">
                    <div className="h-12 bg-gray-300 rounded w-3/4 mb-4 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                    <div className="h-6 bg-gray-300 rounded w-full mb-2 animate-pulse"></div>
                </div>
                <div className="flex flex-col gap-8 h-60 justify-center">
                    <div className="h-6 bg-gray-300 rounded w-20 animate-pulse"></div>
                    <div className="flex flex-row gap-4 items-center">
                        <div className="rounded-full bg-gray-300 w-12 h-12 animate-pulse"></div>
                        <div className="h-6 bg-gray-300 rounded w-24 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </>
    );
};
