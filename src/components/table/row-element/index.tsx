import { useContext, useState } from "react";
import {
  TravelExpenseContext,
  TravelExpenseContextType,
} from "@/context/travel-expense";
import { ContentInput } from "@/components/table/row-input";

export const ContentRow = ({ content }: Props) => {
  const { id, description, cost, currency } = content;

  const { deleteExpense, updateExpense } = useContext(
    TravelExpenseContext,
  ) as TravelExpenseContextType;

  const [iconVisible, setIconVisible] = useState(false);
  const [inputMode, setInputMode] = useState(false);

  if (inputMode) {
    return (
      <ContentInput
        id={id}
        onEditExpense={(expense) => {
          setInputMode(false);
          updateExpense(id, expense);
        }}
        initialValue={{
          cost: `${cost}`,
          description,
          currency,
        }}
      />
    );
  }
  return (
    <tr
      onMouseOver={() => {
        setIconVisible(true);
      }}
      onMouseLeave={() => {
        setIconVisible(false);
      }}
    >
      <td>{description}</td>
      <td>
        <div className="grid grid-cols-2 place-content-end">
          <div>{`${cost} ${currency}`}</div>
          {iconVisible && (
            <div className="text-end">
              <i
                className="fa-solid fa-pen-to-square pr-3 cursor-pointer"
                onClick={() => setInputMode(true)}
              />
              <i
                className="fa-solid fa-trash text-red-500 cursor-pointer"
                onClick={() => deleteExpense(id)}
              />
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

type Props = StateProps;

interface StateProps {
  content: Expense;
}

export interface Expense {
  id: number;
  description: string;
  cost: number;
  currency: string;
}
