import { CategoriesCheckboxes } from "@/components/ui/custom/categories-sidebar";
import Header from "@/components/ui/custom/header";
import { TodolistBox } from "@/components/ui/custom/todolist-box";

export default function Home() {
  return (
    <div className="px-10 py-5 h-full bg-zinc-50">
      <Header />
      <div className="flex gap-2">
        <CategoriesCheckboxes />
        <TodolistBox />
      </div>
    </div>
  );
}
