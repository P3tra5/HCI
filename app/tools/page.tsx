import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tools",
  description: "",
};

export default function ToolsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Tools</h1>
    </main>
  );
}