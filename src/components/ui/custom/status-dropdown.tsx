"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function StatusDropdown({ status }: { status: string }) {
  const [position, setPosition] = React.useState(status);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="mr-3 mt-1" size={"xs"}>
          {status}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Change status</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="To Do">To Do</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Urgent">Urgent</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Done">Done</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
