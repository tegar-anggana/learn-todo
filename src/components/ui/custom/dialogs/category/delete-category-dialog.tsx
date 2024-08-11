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
import { Plus, PlusCircle, PlusSquare, Trash2 } from "lucide-react";

export function DeleteCategoryDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} className="h-8 w-8 mr-1">
          <Trash2 size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Confirm Logout</DialogTitle>
          <DialogDescription>
            Are you sure you want to log out?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
          <Button type="button">Logout</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
