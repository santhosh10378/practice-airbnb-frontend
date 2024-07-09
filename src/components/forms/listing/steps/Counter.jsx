import { useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import Heading from "../../../Heading";

const Counter = ({ variant, id, watch, setValue }) => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    setValue(id, count);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
    setValue(id, count);
  };

  return (
    <div className="flex items-center justify-between">
      <Heading variant={variant} titleClassName="text-sm" />
      <div className="flex items-center justify-end gap-1">
        <CiCircleMinus
          size={34}
          className="cursor-pointer text-gray-500 transition hover:text-black"
          onClick={decrement}
        />

        <p className="w-5 text-center text-sm font-medium">{watch(id) || 0}</p>
        <CiCirclePlus
          size={34}
          className="cursor-pointer text-gray-500 transition hover:text-black"
          onClick={increment}
        />
      </div>
    </div>
  );
};

export default Counter;
