"use client";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "../use-toast";

export default function EditProfileFields() {
  const { toast } = useToast();
  return (
    <div className="flex flex-col gap-2 mb-5 mt-5">
      <Link href={"/"}>
        <Button>Back to Home</Button>
      </Link>
      <p className="text-lg mt-5 mb-3">Profile</p>
      <div className="w-72 flex flex-col gap-5">
        <div>
          <label htmlFor="email">Email</label>
          <Input id="email" />
        </div>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <Input id="fullName" />
        </div>
        <Button
          className="w-fit"
          onClick={() => {
            toast({ description: "Profile updated successfully." });
          }}
        >
          Edit
        </Button>
      </div>
    </div>
  );
}
