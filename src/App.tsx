import { useState } from "react";
import "./App.css";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [count, setCount] = useState(0);

  const { toggle, isDarkMode } = useDarkMode();

  return (
    <>
      <h1 className="text-3xl font-bold">Hello world!</h1>
      <div className="flex flex-col">
        <button
          className="btn w-48"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <div className="bg-primary dark:bg-black h-2 w-48"></div>
        <button className="btn btn-primary w-48" onClick={toggle}>
          dark mode is {isDarkMode.toString()}
        </button>
      </div>
    </>
  );
}

export default App;
