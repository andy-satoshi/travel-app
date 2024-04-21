"use client";
export const Input = ({
  value,
  placeholder = "Type here",
  error,
  onChange,
}: Props) => {
  return (
    <div
      className={`${error && "tooltip tooltip-open tooltip-error"}`}
      data-tip="Invalid value"
    >
      <input
        type="text"
        className={`input input-bordered max-w-xs ${error && "input-error"}`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

type Props = StateProps & DispatchProps;

interface StateProps {
  value: string;
  placeholder?: string;
  error?: boolean;
}

interface DispatchProps {
  onChange: (value: string) => void;
}
