import { CategoriesCheckboxes } from "@/components/ui/custom/categories-sidebar";
import { TodolistBox } from "@/components/ui/custom/todolist-box";

export default function Home() {
  return (
    <div className="px-10 py-5 h-full bg-zinc-50">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="scroll-m-20 text-2xl font-bold">To Do App</h1>
          <h2 className="scroll-m-20 text-xl">Welcome back, Tegar!</h2>
        </div>
        <div className="flex gap-3">
          <p>Profile</p>
          <p>Logout</p>
        </div>
      </div>
      <div className="flex gap-2">
        <CategoriesCheckboxes />
        <TodolistBox />
      </div>
    </div>
  );
}
