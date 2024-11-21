import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uređaj+",
  description: "",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Home page</h1>
    </main>
  );
}