"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const tasks = [
  {
    id: "1",
    title: "Finish frontend todolist",
    category: "Work",
    description: "Due date 10 januari 2024",
    status: "To Do",
  },
  {
    id: "1",
    title: "Finish frontend todolist",
    category: "Work",
    description: "Due date 10 januari 2024",
    status: "Urgent",
  },
] as const;

export function TodolistBox() {
  return (
    <div className="bg-gray-100 w-full py-4 px-4 rounded-lg mt-5">
      <div className="flex gap-4 items-center mb-4">
        <p className="text-lg">Tasks</p>
        <Button>
            <Plus className="h-4 w-4 mr-2" /> Add
          </Button>
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <div key={task.id} className="p-2 flex bg-gray-200 rounded-lg">
            <Button className="mr-3 mt-1" size={"sm"}>
              {task.status}
            </Button>
            <div>
              <p>{task.title}</p>
              <p className="text-sm">{task.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
