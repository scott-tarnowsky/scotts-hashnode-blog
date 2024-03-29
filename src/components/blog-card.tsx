import { PostMetadata } from "@/lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";

export default function BlogCard({ post }: { post: PostMetadata }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <img
          className="rounded-lg h-full"
          src={post.coverImage}
          alt={post.title}
        />
      </CardHeader>
    </Card>
  );
}
