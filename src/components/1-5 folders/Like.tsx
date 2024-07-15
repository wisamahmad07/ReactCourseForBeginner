import { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

interface Props {
  onChange: () => void;
}

const Like = ({ onChange }: Props) => {
  const [love, setFillLove] = useState(true);
  const onToggle = () => {
    setFillLove(!love);
    onChange();
  };
  if (love) return <CiHeart onClick={onToggle} size={40} />;
  return <FaHeart onClick={onToggle} size={33} />;
};

export default Like;
