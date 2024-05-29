import { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (btnValue) => {
    if (btnValue === "=") {
      try {
        setInput(eval(input));
      } catch {
        setInput("Error");
      }
    } else if (btnValue === "C") {
      setInput("");
    } else {
      setInput(input + btnValue);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        {["7", "8", "9", "/"].map((btnValue) => (
          <Button
            key={btnValue}
            btnValue={btnValue}
            onClick={handleButtonClick}
          />
        ))}
        {["4", "5", "6", "*"].map((btnValue) => (
          <Button
            key={btnValue}
            btnValue={btnValue}
            onClick={handleButtonClick}
          />
        ))}
        {["1", "2", "3", "-"].map((btnValue) => (
          <Button
            key={btnValue}
            btnValue={btnValue}
            onClick={handleButtonClick}
          />
        ))}
        {["0", ".", "=", "+"].map((btnValue) => (
          <Button
            key={btnValue}
            btnValue={btnValue}
            onClick={handleButtonClick}
          />
        ))}
        <Button btnValue="C" onClick={handleButtonClick} className="clear" />
      </div>
    </div>
  );
};

export default Calculator;
