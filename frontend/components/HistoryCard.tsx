import { Pen, Trash2 } from "lucide-react";

const HistoryCard = ({}) => {
  return (
    <div className="flex flex-col gap-2 text-sm items-start rounded-lg shadow-md border-[1px] p-3 bg-muted cursor-pointer">
      <div className="flex justify-between w-full">
        <div className="font-semibold">Home loan</div>
        <div className="ml-auto text-xs text-foreground">2024-06-23</div>
      </div>

      <div className="text-xs font-medium">1000</div>
      <div className="line-clamp-2 text-xs text-muted-foreground">
        {` Hi, let's have a meeting tomorrow to discuss the project. I've been
        reviewing the project details and have some ideas I'd like to share.
        It's crucial that we align on our next steps to ensure the project's
        success. Please come prepared with any questions or insights you may
        have. Looking forward to`}
      </div>

      <div className="flex justify-between items-center w-full gap-2 cursor-pointer mt-2">
        <div className="flex item-center justify-center gap-2">
          <span className="rounded-lg px-2.5 py-0.5 bg-[#18181b] text-xs text-primary-foreground font-semibold hover:bg-[#18181b]/80 shadow">
            daily
          </span>
          <span>budget</span>
        </div>
        <div className="flex gap-2">
          <Pen className="h-5 w-5" />
          <Trash2 className="text-themeDanger h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
// description: formData.get("description"),
// paymentType: formData.get("paymentType"),
// category: formData.get("category"),
// amount: parseFloat(formData.get("amount")),
// location: formData.get("location"),
// date: formData.get("date"),
