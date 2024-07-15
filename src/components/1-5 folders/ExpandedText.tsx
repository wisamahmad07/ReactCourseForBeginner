import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}
const ExpandedText = ({ children, maxChars = 25 }: Props) => {
  if (children.length < 10) return children;
  const [trim, setTrim] = useState(true);
  let maxChar: number = maxChars;
  const toggle = () => {
    setTrim(!trim);
  };
  const display = trim ? children : children.substring(0, maxChar) + "...";
  return (
    <div>
      <p className="d-inline">{display}</p>
      <button onClick={toggle}>{trim ? "less" : "more"}</button>
    </div>
  );
};

export default ExpandedText;
