import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-y-6">
      <h1 className="text-4xl font-bold">Component Library</h1>
      <h1 className="text-lg italic">Welcome to my component library</h1>
      <ul>
        <li>
          <Link href="/components/form" className="text-blue-500 underline">
            Form
          </Link>
        </li>
      </ul>
    </div>
  );
}
