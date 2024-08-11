import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AddCategoryDialog } from "./add-category-dialog";
import { Pencil, Settings, Settings2, Trash2 } from "lucide-react";
import { DeleteCategoryDialog } from "./delete-category-dialog";
import { EditCategoryDialog } from "./edit-category-dialog";

export function ManageCategoryDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} className="h-8 w-8 mr-1">
          <Settings2 size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <p className="mr-3">Manage Categories</p>
            <AddCategoryDialog />
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2 mb-3">
          <CategoryItem />
          <CategoryItem />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function CategoryItem() {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-2 rounded-lg">
      <div>Category Title</div>
      <div className="flex">
        <EditCategoryDialog />
        <DeleteCategoryDialog />
      </div>
    </div>
  );
}
