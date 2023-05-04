import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-3xl">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <h1 className="text-3xl font-bold">Hello world!</h1>
    </>
  );
}

export default App;
