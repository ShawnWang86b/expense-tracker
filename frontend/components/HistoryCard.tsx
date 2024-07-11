import Image from "next/image";
import { Trash2 } from "lucide-react";

const HistoryCard = ({}) => {
  return (
    <div className="bg-bgDark text-textLight flex items-center justify-evenly w-[870px] h-[50px] gap-5 rounded-md shadow-md after:border-r-8 after:border-red-300 relative">
      <div className="absolute right-0 top-0 h-full w-[8px] bg-themeDanger"></div>
      <Image src="/coles.png" alt="anz" width="40" height="40" />
      <div>Home loan</div>
      {/* <div>payment type</div> */}
      <div>monthly expense</div>
      <div>1000</div>
      <div>Glen Waverley</div>
      <div>2024-06-23</div>
      <div className="cursor-pointer">
        <Trash2 />
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
