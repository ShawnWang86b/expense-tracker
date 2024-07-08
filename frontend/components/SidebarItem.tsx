"use client";

import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  Icon: LucideIcon;
  label: string;
  href: string;
};
const SidebarItem = ({ Icon, label, href }: Props) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Button
      variant={active ? "sidebarOutline" : "sidebar"}
      className="flex justify-start h-[44px] w-full mt-2"
    >
      <Icon className="mr-5" />
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default SidebarItem;
