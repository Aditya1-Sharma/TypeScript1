import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

interface User {
  id: number;
  userName: string;
}
type fibFunc = (n: number) => number;

const fib: fibFunc = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 38;
function App() {
  const [count, setCount] = useState<number>(0);
  const [user] = useState<User[] | null>(null);

  useEffect(() => {
    // mount->unmount->mount
    console.log("Mounting");
    console.log("Users", user);

    return () => console.log("unmounting");
  }, [user]);

  // ->memeoize the functional component
  const addTwo = useCallback(
    (
      e:
        | React.MouseEvent<HTMLButtonElement>
        | React.KeyboardEvent<HTMLButtonElement>
    ): void => {
      console.log(e.target);

      setCount(count + 1);
      console.log(count);
    },
    [count]
  );

  // useMemo-> It memeoizez a value

  const result = useMemo<number>(() => fib(myNum), [myNum]);

  // useREf

  const inputRef = useRef<HTMLInputElement>(null);

  console.log(inputRef?.current);
  console.log(inputRef?.current?.value);

  return (
    <>
      <h1>Hello World</h1>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{result}</h2>
      <input type="text" ref={inputRef} />
    </>
  );
}

export default App;
