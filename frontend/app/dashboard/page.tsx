import React from "react";
import {
  ShoppingBag,
  Zap,
  Bus,
  TvMinimalPlay,
  ChevronsRight,
  CirclePlus,
  Trash2,
} from "lucide-react";
import SpendCard from "@/components/SpendCard";
import HistoryCard from "@/components/HistoryCard";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import TransactionForm from "@/components/TransactionForm";
import TansactionDetails from "@/components/TansactionDetails";

const Dashboard = () => {
  return (
    <article className="h-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-start">
            <div>
              <div className="flex items-center justify-between mb-4 mt-2 border-b-[1px] border-slate-200 w-full py-2 px-4">
                <div className="text-xl font-bold">History</div>
                <div className="flex gap-2">
                  <Button className="flex justify-start h-[44px] w-full text-sm bg-themePrimary">
                    <CirclePlus className="mr-2 w-5 h-5" />
                    Add New
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 overflow-auto h-[800px] scroll-container">
                <HistoryCard />
                <HistoryCard />
              </div>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-start">
            <div>
              <div className="flex items-center justify-between mb-4 border-b-[1px] border-slate-200 pt-4 px-4 ">
                <div className="text-xl font-bold h-[44px] mt-2">
                  Transaction Details
                </div>
              </div>
              <TransactionForm />
              {/* <TansactionDetails /> */}
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </article>
  );
};

export default Dashboard;

{
  /* <div className="flex gap-4">
        <SpendCard
          Icon={Bus}
          iconColor={`bg-themePrimary`}
          label={"Commute"}
          spend={50}
        />
        <SpendCard
          Icon={ShoppingBag}
          iconColor={`bg-themeDanger`}
          label={"Shopping"}
          spend={240}
        />
        <SpendCard
          Icon={Zap}
          iconColor={`bg-themeWarning`}
          label={"Energy"}
          spend={150}
        />
        <SpendCard
          Icon={TvMinimalPlay}
          iconColor={`bg-themeSecondary`}
          label={"Entertainment"}
          spend={250}
        />
      </div> */
}
