import { ContentRow, Expense } from "./row-element";
import { ContentInput } from "@/components/table/row-input";
import { Dropdown } from "@/components/element/dropdown";
import React, { useState } from "react";

export const Table = ({ contents }: Props) => {
  const [currency, setCurrency] = useState("SGD");

  return (
    <>
      <div className="overflow-x-auto border border-gray-500 rounded-box p-4">
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content, i) => {
              return <ContentRow content={content} key={`row${i}`} />;
            })}
            <ContentInput />
          </tbody>
        </table>
      </div>
      <div className="text-end">
        <Dropdown
          selected={currency}
          list={["SGD", "THB", "JPY"]}
          onSelect={setCurrency}
        />
      </div>
    </>
  );
};

type Props = StateProps & DispatchProps;

interface StateProps {
  contents: Expense[];
}

interface DispatchProps {}
