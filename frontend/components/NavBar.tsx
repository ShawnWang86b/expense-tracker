import { Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const NavBar = () => {
  return (
    <div className="border-b-[1px] border-slate-200 py-2 px-5 flex justify-center lg:justify-end items-center gap-4">
      <div className="relative w-full lg:w-fit">
        <Input className="pl-9" placeholder="Search..." />
        <Search className="absolute left-0 top-0 m-2.5 h-5 w-5 " />
      </div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default NavBar;
