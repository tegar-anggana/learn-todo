"use client";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { AddTodoDialog } from "./dialogs/todo/add-todo-dialog";
import { EditTodoDialog } from "./dialogs/todo/edit-todo-dialog";
import { DeleteTodoDialog } from "./dialogs/todo/delete-todo-dialog";
import { StatusDropdown } from "./status-dropdown";

const tasks = [
  {
    id: "1",
    title: "Finish frontend todolist",
    category: "Work",
    description: "Due date 10 januari 2024",
    status: "To Do",
  },
  {
    id: "2",
    title: "Finish frontend todolist",
    category: "Work",
    description: "Due date 10 januari 2024",
    status: "Urgent",
  },
] as const;

export function TodolistBox() {
  return (
    <div className="bg-gray-100 py-4 px-4 rounded-lg mt-5 flex-1">
      <div className="flex gap-4 items-center mb-4">
        <p className="text-lg">Tasks</p>
        <AddTodoDialog />
      </div>
      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="p-2 flex justify-between bg-gray-200 rounded-lg"
          >
            <div className="flex">
              <StatusDropdown status={task.status} />
              <div>
                <p>{task.title}</p>
                <p className="text-sm">{task.description}</p>
              </div>
            </div>
            <div>
              <EditTodoDialog />
              <DeleteTodoDialog />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
