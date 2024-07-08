import SideBar from "@/components/SideBar";
import React from "react";
import { CarTaxiFront, ShoppingBag, Zap, Bus } from "lucide-react";
import SpendCard from "@/components/SpendCard";

const Dashboard = () => {
  return (
    <article className="p-4">
      <div className="text-[#fafbf9] text-2xl font-semibold my-8">
        Dashboard
      </div>
      <div className="flex gap-4">
        <SpendCard
          Icon={Bus}
          iconColor={`bg-[#c6b2e5]`}
          label={"Commute"}
          spend={50}
        />
        <SpendCard
          Icon={ShoppingBag}
          iconColor={`bg-[#de442c]`}
          label={"Shopping"}
          spend={240}
        />
        <SpendCard
          Icon={Zap}
          iconColor={`bg-[#fcaf2f]`}
          label={"Energy"}
          spend={150}
        />
      </div>

      {/* <section>
            Spend cards
            1. can select/ pin 3 card, display here.
          </section>
          <section>Expense statics</section>
          <section>
            History
            0. transition detials: for example: taxi
            1. transation: this is types, for example, commute, rent, home loan, groceries, etc
            2. income/outcome types
            3. amounts
            4. Date
            5. location, optional
          </section> */}
    </article>
  );
};

export default Dashboard;

// history card
// expense statistic bar chart
// card

// #0B150A

// #010101

// #16161A
