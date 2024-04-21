import { createContext } from "react";
import { Expense } from "@/components/table/row-element";

export const TravelExpenseContext =
  createContext<TravelExpenseContextType | null>(null);

export type TravelExpenseContextType = {
  addExpense: (expense: ExpenseInput) => void;
  deleteExpense: (id: number) => void;
  updateExpense: (id: number, expense: ExpenseInput) => void;
};

type ToString<T> = {
  [K in keyof T]: string;
};

export type ExpenseInput = ToString<Omit<Expense, "id">>;
