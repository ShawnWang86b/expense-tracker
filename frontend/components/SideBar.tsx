"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, BarChart3, LogOut } from "lucide-react";
import SidebarItem from "./SidebarItem";

type Props = {
  className?: string;
};
const SideBar = ({ className }: Props) => {
  return (
    <aside
      className={cn(
        "flex bg-[#0b150a] h-full lg:w-[256px] lg:fixed left-0 top-0 px-6 broder-r-2 flex-col justify-between",
        className
      )}
    >
      <div className="mt-5">
        <SidebarItem
          Icon={LayoutDashboard}
          label={"Dashboard"}
          href="/dashboard"
        />
        <SidebarItem Icon={BarChart3} label={"Statistic"} href="/statistic" />
      </div>
      <div className="mb-10">
        <SidebarItem Icon={LogOut} label={"Logout"} href="/statistic" />
      </div>
    </aside>
  );
};

export default SideBar;
