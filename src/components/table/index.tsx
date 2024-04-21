import { ContentRow, Expense } from "./row-element";
import { ContentInput } from "@/components/table/row-input";

export const Table = ({ contents }: Props) => {
  return (
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
  );
};

type Props = StateProps & DispatchProps;

interface StateProps {
  contents: Expense[];
}

interface DispatchProps {}
