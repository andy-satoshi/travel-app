"use client";
import { Table } from "@/components/table";
import React, { useMemo, useState } from "react";
import { ExpenseInput, TravelExpenseContext } from "@/context/travel-expense";
import { TotalCard } from "@/components/total-card";
import { Dropdown } from "@/components/element/dropdown";

const mockContents = [
  {
    id: 0,
    description: "Hotel",
    cost: 100,
    currency: "SGD",
  },
  {
    id: 1,
    description: "Food",
    cost: 20,
    currency: "SGD",
  },
];

export default function Home() {
  const [contents, setContents] = useState(mockContents);
  const addExpense = (expense: ExpenseInput) => {
    setContents((state) => {
      return state.concat({
        id: state.length,
        description: expense.description,
        cost: Number(expense.cost),
        currency: expense.currency,
      });
    });
  };

  const deleteExpense = (id: number): void => {
    setContents((state) => {
      return state.filter((item) => item.id !== id);
    });
  };

  const updateExpense = (id: number, expense: ExpenseInput): void => {
    setContents((state) => {
      return state.map((item) =>
        item.id === id
          ? { ...expense, id: id, cost: Number(expense.cost) }
          : item,
      );
    });
  };

  const totalAmount = useMemo(() => {
    return contents.reduce((value, content) => {
      return content.cost + value;
    }, 0);
  }, [contents]);

  return (
    <TravelExpenseContext.Provider
      value={{ updateExpense, addExpense, deleteExpense }}
    >
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
    </TravelExpenseContext.Provider>
  );
}
