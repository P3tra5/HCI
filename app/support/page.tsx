import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support",
  description: "",
};


export default function SupportPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Support</h1>
    </main>
  );
}