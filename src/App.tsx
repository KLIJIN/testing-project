import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FormField from "./FormField";
import { useMergeState } from "./hooks/useMergeState";

const useCounter = (init = 0, delta = 1) => {
  const [count, setCount] = useState<number>(init);

  const inc = () => {
    setCount((prev) => prev + delta);
  };

  const dec = () => {
    setCount((prev) => prev - delta);
  };

  return [count, inc, dec];
};

const initialState = {
  firstName: "",
  lastName: "",
};

function App() {
  const [count, setCount] = useState(0);
  const [count2, inc, dec] = useCounter(1800, 15);
  const [data, setData] = useMergeState(initialState);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <p>{count2}</p>
        <button onClick={inc}>inc</button>
        <button onClick={dec}>dec</button>
      </div>

      <form>
        <FormField
          name="first Name"
          label="first name"
          value={data.firstName}
          onChange={(firstName) => {
            debugger;
            setData({ firstName });
          }}
        />

        <FormField
          name="last Name"
          label="last name"
          value={data.lastName}
          onChange={(lastName) => {
            debugger;
            setData({ lastName: lastName });
          }}
        />
      </form>
    </>
  );
}

export default App;
