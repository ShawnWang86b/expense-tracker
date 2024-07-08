import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

type Props = {
  Icon: LucideIcon;
  iconColor: string;
  label: string;
  spend: number;
};

const SpendCard = ({ Icon, iconColor, label, spend }: Props) => {
  return (
    <div className="bg-[#0b150a] h-[150px] w-[220px] rounded-md text-[#fafbf9] relative p-4 shadow-md">
      <div
        className={cn(
          "h-10 w-10 absolute top-5 left-8 rotate-17 rounded-md z-0",
          iconColor
        )}
      ></div>
      <Icon className="w-12 h-12 opacity-75 ml-2 z-10" strokeWidth={1.2} />
      <div className="text-sm mt-4 opacity-75">{label}</div>
      <div className="mt-2">
        {spend} AUD/<span className="text-sm opacity-75">month</span>
      </div>
    </div>
  );
};

export default SpendCard;
