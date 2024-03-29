import Posts from "@/components/posts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-7xl w-full px-3 xl:p-0 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        <Posts />
      </div>
    </main>
  );
}
