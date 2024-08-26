import { ReactNode, useRef } from "react";
import { useCounter } from "./context/CounterContext";
import { useCounterText } from "./context/CounterContext";

type ChildrenType = {
  children: (num: number) => ReactNode;
};
function Counter() {
  const { count, increment, decrement } = useCounter();
  const { text, handleTextInput } = useCounterText();

  const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  console.log(inputRef.current?.value);

  return (
    <>
      <h1>{count}</h1>

      <div>
        <button onClick={increment}>Inc</button>
        <button onClick={decrement}>Dec</button>
      </div>

      <input type="text" onChange={handleTextInput} ref={inputRef} />
      <h2 onClick={handleClick}>{text}</h2>
    </>
  );
}

export default Counter;
