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

const Dashboard = () => {
  return (
    <article className="p-4">
      <div className="text-textLight text-2xl font-semibold my-8">
        Dashboard
      </div>
      <div className="flex gap-4">
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
      </div>

      <div className="w-[930px] bg-bgDark h-[600px] rounded-md shadow-md mt-10 px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-textLight text-2xl font-semibold">History</div>
          <div className="flex gap-2">
            <Button variant="sidebarOutline">
              Add New
              <CirclePlus size="sm" className="ml-2" />
            </Button>
            <Button variant="sidebar" className="text-themePrimary ">
              View All <ChevronsRight size="sm" className="ml-2" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <HistoryCard />
          <HistoryCard />
        </div>
      </div>
    </article>
  );
};

export default Dashboard;
