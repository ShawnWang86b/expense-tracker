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

const Dashboard = () => {
  return (
    <article className="p-4">
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] rounded-lg border"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-semibold">History</div>
                <div className="flex gap-2">
                  <Button className="flex justify-start h-[44px] w-full mt-2 bg-themePrimary">
                    <CirclePlus className="mr-5" />
                    Add New
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <HistoryCard />
                <HistoryCard />
              </div>
            </span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
      {/* <div className="flex gap-4">
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
      </div> */}
    </article>
  );
};

export default Dashboard;
