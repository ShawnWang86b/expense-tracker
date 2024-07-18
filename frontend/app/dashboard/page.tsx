"use client";
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
import {
  GET_AUTHENTICATED_USER,
  GET_USER_AND_TRANSACTIONS,
} from "@/graphql/queries/user.query";
import {
  GET_TRANSACTIONS,
  GET_TRANSACTION,
  GET_TRANSACTION_STATISTICS,
} from "@/graphql/queries/transaction.query";
import { useQuery } from "@apollo/client";
import { format } from "date-fns";
import { useState } from "react";
enum ViewStatus {
  AddNew,
  Edit,
  Delete,
  History,
}
const Dashboard = () => {
  const [currentStatus, setCurrentStatus] = useState<ViewStatus | null>(null);
  const [transactionDetail, setTransactionDetail] = useState({});
  const { data, loading } = useQuery(GET_TRANSACTIONS);
  console.log("currentStatus", currentStatus);
  if (!data) {
    return <div>no data</div>;
  }

  if (loading) {
    return <>Loading...</>;
  }

  if (!data) {
    return <>No data available.</>;
  }

  const handleFilterSelectCard = (id: number) => {
    const oneTransactionDetail = data.transactions.find(
      (item: any) => item._id === id
    );

    setTransactionDetail(oneTransactionDetail);
    setCurrentStatus(ViewStatus.History);
  };
  const handleAddNew = () => {
    setCurrentStatus(ViewStatus.AddNew);
  };

  const handleEdit = () => {
    setCurrentStatus(ViewStatus.Edit);
  };

  const handleDelete = () => {
    setCurrentStatus(ViewStatus.Delete);
  };

  const renderContent = () => {
    switch (currentStatus) {
      case ViewStatus.AddNew:
        return <TransactionForm />;
      case ViewStatus.Edit:
        return <div>Edit Component</div>;
      case ViewStatus.Delete:
        return <div>Delete Component</div>;
      case ViewStatus.History:
        return <TansactionDetails data={transactionDetail} />;
      default:
        return null;
    }
  };
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
                  <Button
                    className="flex justify-start h-[44px] w-full text-sm bg-themePrimary"
                    onClick={handleAddNew}
                  >
                    <CirclePlus className="mr-2 w-5 h-5" />
                    Add New
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-4 overflow-auto h-[800px] scroll-container">
                {data.transactions.map((transaction: any) => (
                  <div
                    key={transaction._id}
                    onClick={() => {
                      handleFilterSelectCard(transaction._id);
                    }}
                  >
                    <HistoryCard
                      amount={transaction.amount}
                      location={transaction.location}
                      description={transaction.description}
                      category={transaction.category}
                      date={new Date(transaction.date)}
                      handleEdit={(e: any) => {
                        e.stopPropagation();
                        handleEdit();
                      }}
                      handleDelete={(e: any) => {
                        e.stopPropagation();
                        handleDelete();
                      }}
                    />
                  </div>
                ))}
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
              {/* <TransactionForm /> */}
              {renderContent()}
              {/* {openStatus && <TansactionDetails data={transactionDetail} />} */}
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
