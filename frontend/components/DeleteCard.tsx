import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useMutation } from "@apollo/client";
import { DELETE_TRANSACTION } from "@/graphql/mutations/transaction.mutation";
import { Input } from "./ui/input";
import { Trash2 } from "lucide-react";

type Props = {
  id: string;
};

const DeleteCard = ({ id }: Props) => {
  const [transactionId, setTransactionId] = useState("");
  const [hasDeletePermit, setHasDeletePermit] = useState(false);
  const [deleteTransaction, { loading }] = useMutation(DELETE_TRANSACTION, {
    refetchQueries: ["GetTransactions", "GetTransactionStatistics"],
  });

  useEffect(() => {
    if (transactionId === id) {
      setHasDeletePermit(true);
    } else {
      setHasDeletePermit(false);
    }
  }, [id, transactionId]);

  const handleTransactionDelete = async (id: string) => {
    try {
      await deleteTransaction({
        variables: { transactionId: id },
      });
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <div className="bg-muted p-4">
      <div className="text-sm">
        This record will be deleted, along with all of its Data, History,
        Statistic, Dashboard, and Settings.
      </div>
      <div className="text-themeDanger text-sm py-6">
        <span>Warning:</span> This action is not reversible. Please be certain.
      </div>
      <div className="border-t-[1px] border-slate-200 py-5"></div>
      <div className="text-sm">
        {`Enter the project name `}
        <span className="font-semibold">{id}</span>
        {` to continue:`}
        <div className="py-2">
          <Input
            type="email"
            placeholder=""
            onChange={(e) => setTransactionId(e.target.value)}
          />
        </div>
      </div>
      {!hasDeletePermit && (
        <div className="text-themeDanger text-sm pb-5">
          Please match the requested format
        </div>
      )}
      <div className="border-t-[1px] border-slate-200 py-4"></div>
      <div className="flex justify-end">
        <Button
          className="flex justify-start h-[44px] w-[150px] text-sm bg-themeDanger hover:bg-themeDanger/80"
          disabled={!hasDeletePermit}
          onClick={() => handleTransactionDelete(id)}
        >
          <Trash2 className="mr-2 w-5 h-5" />
          <div className="pl-2">Confirm</div>
        </Button>
      </div>
    </div>
  );
};

export default DeleteCard;
