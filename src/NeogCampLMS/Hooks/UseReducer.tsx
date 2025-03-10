import React, { useReducer } from "react";

type StateType = {
  count: number;
};

type ActionType = {
  type: string;
};

type CounterReducerType = (state: StateType, action: ActionType) => StateType;

const counterReducer: CounterReducerType = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

function UseReducer() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
  } as StateType);

  return (
    <div>
      <h1>{state.count}</h1>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      </div>
    </div>
  );
}

export default UseReducer;
