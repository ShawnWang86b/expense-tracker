"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BarChart3,
  Settings,
  FolderClock,
  Heart,
  LogOut,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { useMutation } from "@apollo/client";
import { LOGOUT } from "@/graphql/mutations/user.mutation";

type Props = {
  className?: string;
};
const SideBar = ({ className }: Props) => {
  const [logout, { loading, client }] = useMutation(LOGOUT, {
    refetchQueries: ["GetAuthenticatedUser"],
  });

  const handleLogout = async () => {
    try {
      await logout();
      client.resetStore();
      console.log("logout success");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <aside
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-6 border-r-[1px] border-slate-200 flex-col justify-between bg-muted",
        className
      )}
    >
      <div className="mt-32">
        <SidebarItem
          Icon={LayoutDashboard}
          label={"Dashboard"}
          href="/dashboard"
        />
        <SidebarItem Icon={BarChart3} label={"Statistic"} href="/statistic" />
        <SidebarItem Icon={FolderClock} label={"History"} href="/history" />
        <SidebarItem Icon={Heart} label={"Wishlist"} href="/wish-list" />
        <SidebarItem Icon={Settings} label={"Settings "} href="/settings " />
      </div>
      <div className="mb-10" onClick={handleLogout}>
        <SidebarItem Icon={LogOut} label={"Logout"} href="/sign-in" />
      </div>
    </aside>
  );
};

export default SideBar;
