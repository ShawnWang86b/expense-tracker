"use client";

import { Pen, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { dateFormat } from "@/utils/dateFormat";

type Props = {
  amount: number;
  location: string;
  description: string;
  category: string;
  date: string;
  handleEdit: any;
  handleDelete: any;
};
const HistoryCard = ({
  amount,
  location,
  description,
  category,
  date,
  handleEdit,
  handleDelete,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 text-sm items-start rounded-lg shadow-md border-[1px] p-3 bg-muted cursor-pointer hover:border-slate-300 hover:border-[1px] transition duration-700 ease-in-out transform  hover:-translate-y-1">
      <div className="flex justify-between w-full">
        <div className="font-semibold">{location}</div>
        <div className="ml-auto text-xs text-foreground">
          {dateFormat(date)}
        </div>
      </div>

      <div className="text-xs font-medium">{`AU$ ${amount}`}</div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {description}
      </div>

      <div className="flex justify-between items-center w-full gap-2 cursor-pointer mt-2">
        <div className="flex item-center justify-center gap-2 ">
          <Badge variant="outline">{category}</Badge>
        </div>
        <div className="flex gap-2 z-10">
          <Pen
            className="h-6 w-6 p-1 hover:border-[1px] hover:border-themeDanger rounded-lg"
            onClick={handleEdit}
          />
          <Trash2
            className="h-6 w-6 p-1 hover:border-[1px] hover:border-themeDanger rounded-lg"
            onClick={handleDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
