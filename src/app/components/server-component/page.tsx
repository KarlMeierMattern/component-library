import Link from "next/link";
import { Suspense } from "react";
import DummyData from "./DummyData";

// force the page to be dynamic because at build time this is statically pre-rendered
export const dynamic = "force-dynamic";

export default async function PostsPage() {
  return (
    <div className="text-center pt-16 px-5">
      <Link href="/" className="text-blue-500 underline">
        Home
      </Link>
      <h1 className="text-2xl font-bold mb-8">Posts</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <DummyData />
      </Suspense>
    </div>
  );
}
