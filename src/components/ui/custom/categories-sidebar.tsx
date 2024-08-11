"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, Plus } from "lucide-react";
import { AddCategoryDialog } from "./dialogs/category/add-category-dialog";
import { ManageCategoryDialog } from "./dialogs/category/manage-category-dialog";

const categories = [
  {
    id: "work",
    label: "Work",
  },
  {
    id: "study",
    label: "A quick brown fox jumps over the lazy dog",
  },
  {
    id: "play",
    label: "Play",
  },
] as const;

export function CategoriesCheckboxes() {
  return (
    <div className="bg-gray-100 py-4 px-4 rounded-lg mt-5">
      <div className="flex gap-4 items-center mb-4">
        <p className="text-lg">Categories</p>
        <ManageCategoryDialog/>
      </div>
      <div className="flex">
        <Checkbox className="mt-1" id="all" />
        <label htmlFor="all" className="ml-3">
          All 
        </label>
      </div>
      {categories.map((categories) => (
        <div key={categories.id} className="flex">
          <Checkbox className="mt-1" id={categories.id} />
          <label htmlFor={categories.id} className="ml-3 max-w-56">
            {categories.label}
          </label>
        </div>
      ))}
    </div>
  );
}
