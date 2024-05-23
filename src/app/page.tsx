"use client";
import { Table } from "@/components/table";
import React, { useMemo } from "react";
import { useTravelExpenseContext } from "@/context/travel-expense";
import { TotalCard } from "@/components/total-card";

export default function Home() {
  const { contents } = useTravelExpenseContext();

  const totalAmount = useMemo(() => {
    return contents.reduce((value, content) => {
      return content.cost + value;
    }, 0);
  }, [contents]);

  return (
    <div className="grid grid-flow-row-dense grid-cols-4">
      <div className="pr-4 col-span-3">
        <Table contents={contents} />
      </div>
      <div className="col-span-1">
        <div className="flex justify-end">
          <TotalCard amount={totalAmount} currency={"SGD"} />
        </div>
      </div>
    </div>
  );
}
