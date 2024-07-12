"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, BarChart3, LogOut } from "lucide-react";
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
        "flex bg-bgDark h-full lg:w-[256px] lg:fixed left-0 top-0 px-6 broder-r-2 flex-col justify-between",
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
      </div>
      <div className="mb-10" onClick={handleLogout}>
        <SidebarItem Icon={LogOut} label={"Logout"} href="/sign-in" />
      </div>
    </aside>
  );
};

export default SideBar;
