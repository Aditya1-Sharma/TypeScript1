import "./App.css";
import { CounterProvider } from "./context/CounterContext";
import { initState } from "./context/CounterContext";
import Counter from "./Counter";
function App() {
  return (
    <CounterProvider count={initState.count} text={initState.text}>
      <>
        <h1 style={{ backgroundColor: "pink" }}>hello</h1>
        <Counter />
      </>
    </CounterProvider>
  );
}

export default App;
