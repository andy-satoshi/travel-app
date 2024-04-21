export const Button = ({ children, type = "", shape = "" }: Props) => {
  return (
    <button className={`btn ${type} ${shape && `btn-${shape}`}`}>
      {children}
    </button>
  );
};

type Props = StateProps;

interface StateProps {
  children?: React.ReactNode;
  type?: string;
  shape?: "" | "circle" | "square";
}
