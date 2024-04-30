import { on } from "next/dist/client/components/react-dev-overlay/pages/bus";

export const Dropdown = ({ selected, list, onSelect }: Props) => {
  return (
    <details className="dropdown">
      <summary className="m-1 btn">Selected currency: {selected}</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        {list.map((item, i) => (
          <li key={`dd-key${i}`}>
            <a
              onClick={() => {
                if (onSelect) {
                  onSelect(item);
                }
              }}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
};

type Props = StateProps & DispatchProps;

interface StateProps {
  selected?: string;
  list: string[];
}

interface DispatchProps {
  onSelect?: (value: string) => void;
}
