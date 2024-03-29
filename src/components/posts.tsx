"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/requests";
import { Button } from "@/components/ui/button";
import BlogCard from "./blog-card";

export default function Posts() {
  const { data, hasNextPage, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    getNextPageParam: (lastPage) =>
      lastPage.length < 9 ? undefined : lastPage[lastPage.length - 1].cursor,
    initialPageParam: "",
  });
  return (
    <>
      {data?.pages.map((group) =>
        group.map((post) => <BlogCard key={post.id} post={post} />)
      )}

      <div className="col-span-1 lg:col-span-3 w-full flex justify-center my-5">
        <Button
          className="w-full"
          variant="outline"
          disabled={!hasNextPage || isFetching}
          onClick={() => fetchNextPage()}
        >
          {isFetching
            ? "Loading..."
            : hasNextPage
            ? "Load more"
            : "That's all for today"}
        </Button>
      </div>
    </>
  );
}
