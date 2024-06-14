import React from "react";

export const TotalCard = ({ amount, currency }: Props) => {
  return (
    <div className="card w-96 bg-base-100 outline outline-cyan-600 shadow-xl">
      <div className="card-body card-bordered">
        <h2 className="card-title">Total</h2>
        <div className="text-right">
          <p className="text-5xl font-extrabold text-sky-400 pb-1">
            {amount?.toLocaleString()}
          </p>
          <p className="text-xl">{currency}</p>
        </div>
      </div>
    </div>
  );
};

type Props = StateProps;

interface StateProps {
  amount: number;
  currency: string;
}
