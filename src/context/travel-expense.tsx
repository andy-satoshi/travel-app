"use client";
import { createContext, useContext, useState } from "react";
import { Expense } from "@/components/table/row-element";

export const TravelExpenseContextProvider = ({ children }: Props) => {
  const [contents, setContents] = useState(
    travelExpenseContextDefaultValue.contents,
  );
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

  return (
    <TravelExpenseContext.Provider
      value={{
        updateExpense,
        addExpense,
        deleteExpense,
        setContents,
        contents,
      }}
    >
      {children}
    </TravelExpenseContext.Provider>
  );
};

const travelExpenseContextDefaultValue: TravelExpenseContextType = {
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
  setContents: () => {},
  contents: [
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
  ],
};

export const TravelExpenseContext = createContext<TravelExpenseContextType>(
  travelExpenseContextDefaultValue,
);

export interface TravelExpenseContextType {
  addExpense: (expense: ExpenseInput) => void;
  deleteExpense: (id: number) => void;
  updateExpense: (id: number, expense: ExpenseInput) => void;
  setContents: (contents: Expense[]) => void;
  contents: Expense[];
}

type ToString<T> = {
  [K in keyof T]: string;
};

export type ExpenseInput = ToString<Omit<Expense, "id">>;

type Props = StateProps;

interface StateProps {
  children: React.ReactNode;
}

export const useTravelExpenseContext = () => useContext(TravelExpenseContext);
