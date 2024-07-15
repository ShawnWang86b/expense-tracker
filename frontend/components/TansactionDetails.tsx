import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// type Props = {
//   data: any;
// };

const TansactionDetails = () => {
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
              <div className="font-semibold">Home loan</div>
              <div className="text-xs text-muted-foreground">
                Oct 22, 2023, 9:00:00 AM
              </div>
            </div>

            <div className="text-sm">$330</div>
            <div className="flex gap-2 text-sm">
              <span>Category:</span>
              <Badge variant="outline">home loan</Badge>
              <Badge variant="outline">important</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex-1 text-sm">
        {` Hi, let's have a meeting tomorrow to discuss the project. I've been
        reviewing the project details and have some ideas I'd like to share.
        It's crucial that we align on our next steps to ensure the project's
        success. Please come prepared with any questions or insights you may
        have. Looking forward to our meeting! Best regards, William`}
      </div>
    </div>
  );
};

export default TansactionDetails;
