import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Borrowed Tools",
  description: "",
};

export default function ProfileBorrowedPage() {
    return (
      <main className="flex min-h-screen flex-col items-center p-10">
        <h1 className="text-6xl font-extrabold tracking-tight">Borrowed Tools</h1>
      </main>
    );
  }