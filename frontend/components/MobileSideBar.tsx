import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import SideBar from "./SideBar";

const MobileSideBar = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger>
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent className="p-0 z-[100]" side="left">
          <SideBar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSideBar;
