import React, { useContext } from "react";
import "./App.css";
import { SimpleProvider, SimpleContext } from "./store";

const Counter = () => {
  const context = useContext(SimpleContext);

  const handleClickIncrement = () => {
    context.setCount(context.count++);
  };

  const handleClickDecrement = () => {
    context.setCount(context.count--);
  };

  return (
    <div>
      <button onClick={handleClickIncrement}>INCREMENTE</button>
      {context.count}
      <button onClick={handleClickDecrement}>DECREMENT</button>
    </div>
  );
};

function App() {
  return (
    <SimpleProvider>
      <Counter />
    </SimpleProvider>
  );
}

export default App;
