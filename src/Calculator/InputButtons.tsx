import { useState } from "react";

const InputButtons = () => {
  const [input, setInput] = useState<string>("");
  const [value, setValue] = useState<number>(0);

  let index: number;
  let num1, num2;
  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value.toString());
  };

  const actionClick = (value: string) => {
    if (value === "C") {
      setInput("");
      setValue(0);
    }
    if (value === "Del") setInput(input.slice(0, length - 1));
  };

  const calculate = (value1: string) => {
    if (input.indexOf("*") !== -1) {
      index = input.indexOf("*");
    } else if (input.indexOf("-") !== -1) {
      index = input.indexOf("-");
    }
    if (input.indexOf("+") !== -1) {
      index = input.indexOf("+");
    }
    if (input.indexOf("/") !== -1) {
      index = input.indexOf("/");
    }

    num1 = input.slice(0, index);
    num2 = input.slice(index + 1, input.length);

    console.log(index, num1, num2);

    if (input[index] === "/") return setValue(parseInt(num1) / parseInt(num2));
    if (input[index] === "*") return setValue(parseInt(num1) * parseInt(num2));
    if (input[index] === "+") return setValue(parseInt(num1) + parseInt(num2));
    if (input[index] === "-") return setValue(parseInt(num1) - parseInt(num2));
  };

  return (
    <div>
      <div className="p-4  text-end">
        <label htmlFor="Input" className="mb-2">
          Enter Expression here
        </label>
        <input
          type="text"
          id="Input"
          className="form-control text-end"
          value={input}
          readOnly
        />
      </div>
      <div className="me-5 ms-5 d-flex justify-content-between">
        <b>Result:</b>
        <p>{value}</p>
      </div>
      <div className="d-flex p-4">
        <button
          className="btn btn-secondary me-3 rounded-pill"
          onClick={() => actionClick("C")}
        >
          <b>C</b>
        </button>
        <button
          className="btn btn-secondary me-3  rounded-pill"
          onClick={() => actionClick("Del")}
        >
          <b>Del</b>
        </button>
        <button className="btn btn-secondary me-3 rounded-pill">
          <b>%</b>
        </button>
        <button
          className="btn btn-secondary me-3 rounded-pill"
          onClick={() => handleClick("/")}
        >
          <b>/</b>
        </button>
      </div>
      <div className="d-flex p-4">
        <button
          className="btn btn-dark me-3 rounded-pill"
          onClick={() => handleClick("7")}
        >
          <b>7</b>
        </button>
        <button
          className="btn btn-dark me-3  rounded-pill"
          onClick={() => handleClick("8")}
        >
          <b>8</b>
        </button>
        <button
          className="btn btn-dark me-3 rounded-pill"
          onClick={() => handleClick("9")}
        >
          <b>9</b>
        </button>
        <button
          className="btn btn-secondary me-3 rounded-pill"
          onClick={() => handleClick("*")}
        >
          <b>*</b>
        </button>
      </div>
      <div className="d-flex p-4">
        <button
          className="btn btn-dark me-3 rounded-pill"
          onClick={() => handleClick("4")}
        >
          <b>4</b>
        </button>
        <button
          className="btn btn-dark me-3  rounded-pill"
          onClick={() => handleClick("5")}
        >
          <b>5</b>
        </button>
        <button
          className="btn btn-dark me-3 rounded-pill"
          onClick={() => handleClick("6")}
        >
          <b>6</b>
        </button>
        <button
          className="btn btn-secondary me-3 rounded-pill"
          onClick={() => handleClick("-")}
        >
          <b>-</b>
        </button>
      </div>
      <div className="d-flex p-4">
        <button
          className="btn btn-dark me-3 rounded-pill"
          onClick={() => handleClick("1")}
        >
          <b>1</b>
        </button>
        <button
          className="btn btn-dark me-3  rounded-pill"
          onClick={() => handleClick("2")}
        >
          <b>2</b>
        </button>
        <button
          className="btn btn-dark me-3 rounded-pill"
          onClick={() => handleClick("3")}
        >
          <b>3</b>
        </button>
        <button
          className="btn btn-secondary me-3 rounded-pill"
          onClick={() => handleClick("+")}
        >
          <b>+</b>
        </button>
      </div>
      <div className="d-flex p-4">
        <button
          className="btn btn-dark me-3 rounded-pill"
          onClick={() => handleClick("00")}
        >
          <b>00</b>
        </button>
        <button
          className="btn btn-dark me-3  rounded-pill"
          onClick={() => handleClick("0")}
        >
          <b>0</b>
        </button>
        <button
          className="btn btn-dark me-3 rounded-pill"
          onClick={() => handleClick(".")}
        >
          <b>.</b>
        </button>
        <button
          className="btn btn-secondary me-3 rounded-pill"
          onClick={() => calculate("=")}
        >
          <b>=</b>
        </button>
      </div>
    </div>
  );
};

export default InputButtons;
