import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Lending history",
  description: "View all tools you've borrowed.",
};

export default function ProfileHistoryPage() {
    return (
      <main className="flex min-h-screen flex-col items-center p-10">
        <h1 className="text-6xl font-extrabold tracking-tight">Lending History</h1>
      </main>
    );
  }