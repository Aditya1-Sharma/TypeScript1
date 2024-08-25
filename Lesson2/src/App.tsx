import "./App.css";

import { useState } from "react";
import Counter from "./components/Counter";
import Heading from "./components/Heading";
import { Section1 } from "./components/Section";
import List from "./components/List";
function App() {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h1>Heello</h1>
      <Heading title="Aditya" />
      <Section1 title="Selena"> This is my Section</Section1>
      <Counter setCount={setCount} count={count}>
        {" "}
        count is {count}
      </Counter>

      <List
        items={[" coffee", "Tacos", "Code"]}
        render={(item: string) => <span className="gold">{item}</span>}
      />
    </>
  );
}

export default App;
