import React, { useState } from "react";
import Button from "../components/Button";

const Calculator = () => {
  const [inputvalue, setInputValue] = useState("");

  const handleClick = (e) => {
    const btnValue = e.target.innerText;

    if (btnValue === "AC") {
      setInputValue(""); 
      return;
    }
    if (btnValue === "DEL") {
      setInputValue(inputvalue.slice(0,-1)); 
      return;
    }
    if (btnValue === "=") {
      try {
        setInputValue((eval(inputvalue)));
      } catch {
        setInputValue("Error");
      }
      return;
    }


    setInputValue(inputvalue + btnValue);
  };

  return (
    <div className="bg-[#161515] w-full h-screen flex items-center justify-center p-10">
      <div className="w-[400px] p-4 border border-teal-700 rounded bg-transparent">
        <input
          type="text"
          placeholder="0"
          className="border border-teal-700 w-full text-right p-3 mb-8 text-3xl rounded text-white"
          readOnly
          value={inputvalue}
        />

        <div className="grid grid-cols-4 gap-5 text-center">
          <Button onClick={handleClick} btnText={"AC"} btnStyle={"bg-teal-700"} />
          <Button onClick={handleClick} btnText={"DEL"} btnStyle={"bg-teal-700"} />
          <Button onClick={handleClick} btnText={"%"} btnStyle={"bg-teal-700"} />
          <Button onClick={handleClick} btnText={"/"} btnStyle={"bg-teal-700"} />

          <Button onClick={handleClick} btnText={"7"} />
          <Button onClick={handleClick} btnText={"8"} />
          <Button onClick={handleClick} btnText={"9"} />
          <Button onClick={handleClick} btnText={"*"} btnStyle={"bg-teal-700"} />

          <Button onClick={handleClick} btnText={"4"} />
          <Button onClick={handleClick} btnText={"5"} />
          <Button onClick={handleClick} btnText={"6"} />
          <Button onClick={handleClick} btnText={"+"} btnStyle={"bg-teal-700"} />

          <Button onClick={handleClick} btnText={"1"} />
          <Button onClick={handleClick} btnText={"2"} />
          <Button onClick={handleClick} btnText={"3"} />
          <Button onClick={handleClick} btnText={"-"} btnStyle={"bg-teal-700"} />

          <Button onClick={handleClick} btnText={"0"} />
          <Button onClick={handleClick} btnText={"00"} />
          <Button onClick={handleClick} btnText={"."} />
          <Button onClick={handleClick} btnText={"="} btnStyle={"bg-teal-700"} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
