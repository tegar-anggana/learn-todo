import Link from "next/link";
import React from "react";
import { LogoutDialog } from "@/components/ui/custom/dialogs/logout/logout-dialog";

export default function Header({ subtitle = "Welcome back, Tegar!" }) {
  return (
    <div className="flex justify-between items-center mb-5">
      <div>
        <h1 className="scroll-m-20 text-2xl font-bold">To Do App</h1>
        <h2 className="scroll-m-20 text-xl">{subtitle}</h2>
      </div>
      <div className="flex items-center gap-5">
        <Link href={"/profile"}>Profile</Link>
        <LogoutDialog/>
      </div>
    </div>
  );
}
