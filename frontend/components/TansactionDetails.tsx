import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { GET_TRANSACTION } from "@/graphql/queries/transaction.query";
import { useQuery } from "@apollo/client";

type Props = {
  data: any;
};

const TansactionDetails = ({ data }: Props) => {
  console.log("data", data);
  return (
    <div>
      <div className="flex border-b-[1px] border-slate-200">
        <div className="flex items-center gap-2 p-4 w-full">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <div className="flex justify-between w-[500px]">
              <div className="font-semibold">{data.location}</div>
              <div className="text-xs text-muted-foreground">{`date`}</div>
            </div>

            <div className="text-sm">{data.amount}</div>
            <div className="flex gap-2 text-sm">
              <span>Category:</span>
              <Badge variant="outline">{data.category}</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 text-sm">{data.description}</div>
    </div>
  );
};

export default TansactionDetails;
