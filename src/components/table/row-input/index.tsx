import { useContext, useState } from "react";
import {
  ExpenseInput,
  TravelExpenseContext,
  TravelExpenseContextType,
} from "@/context/travel-expense";
import { Input } from "@/components/element/input";
import { Expense } from "@/components/table/row-element";

export const ContentInput = ({
  id,
  onEditExpense,
  initialValue = {
    description: "",
    cost: "",
    currency: "SGD",
  },
}: Props) => {
  const { addExpense } = useContext(
    TravelExpenseContext,
  ) as TravelExpenseContextType;
  const [error, setError] = useState({
    description: false,
    cost: false,
  });

  const [expense, setExpense] = useState(initialValue);

  const updateExpense = (value: string, category: keyof Expense): void => {
    setExpense((state) => {
      return {
        ...state,
        [category]: value,
      };
    });
  };

  const handleAddExpense = (e: { key: string }) => {
    if (e.key === "Enter") {
      if (expense.description === "") {
        setError((state) => {
          return {
            ...state,
            description: true,
          };
        });
      }

      if (isNaN(Number(expense.cost)) || Number(expense.cost) <= 0) {
        setError((state) => {
          return {
            ...state,
            cost: true,
          };
        });
      }

      if (
        expense.description != "" &&
        !isNaN(Number(expense.cost)) &&
        Number(expense.cost) > 0
      ) {
        if (id == undefined) {
          addExpense(expense);
          updateExpense("", "description");
          updateExpense("", "cost");
        } else {
          if (onEditExpense) {
            onEditExpense(expense);
          }
        }
        setError({
          description: false,
          cost: false,
        });
      }
    }
  };

  return (
    <tr key="input" onKeyDown={handleAddExpense}>
      <td>
        <Input
          placeholder="Description"
          value={expense.description}
          onChange={(value) => {
            updateExpense(value, "description");
          }}
          error={error.description}
        />
      </td>
      <td>
        <Input
          placeholder="Cost"
          value={expense.cost}
          onChange={(value) => {
            updateExpense(value, "cost");
          }}
          error={error.cost}
        />
      </td>
    </tr>
  );
};

type Props = StateProps & DispatchProps;

interface StateProps {
  id?: number;
  initialValue?: ExpenseInput;
}

interface DispatchProps {
  onEditExpense?: (expense: ExpenseInput) => void;
}
