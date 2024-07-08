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
    <div className="bg-[#0b150a] h-[160px] w-[220px] rounded-md text-[#fafbf9] relative p-4">
      <Icon className="w-16 h-16 opacity-75" strokeWidth={1} />
      <div
        className={cn("h-[25px] w-[25px] absolute top-0 left-0", iconColor)}
      ></div>
      <div className="text-sm mt-2 opacity-75">{label}</div>
      <div className="mt-2">
        {spend}AUD/<span className="text-sm opacity-75">month</span>
      </div>
    </div>
  );
};

export default SpendCard;
