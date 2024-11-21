import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Acount settings",
  description: "Edit your profile",
};

export default function ProfileSettingsPage() {
    return (
      <main className="flex min-h-screen flex-col items-center p-10">
        <h1 className="text-6xl font-extrabold tracking-tight">Account Settings</h1>
      </main>
    );
  }