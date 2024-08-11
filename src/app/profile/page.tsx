import EditProfileFields from "@/components/ui/custom/edit-profile-fields";
import Header from "@/components/ui/custom/header";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="px-10 py-5 h-full bg-zinc-50">
      <Header subtitle="Edit Profile" />
      <EditProfileFields />
    </div>
  );
}
