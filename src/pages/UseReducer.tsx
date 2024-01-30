import React, { useReducer, useState } from 'react';

const initialState = { count: 0 };
const reducer = (currentState, action) => {
    console.log("CurrentState => ", currentState);
    console.log("Action => ", action);
    switch (action.type) {
        case "increment":
            return { count: currentState.count + 1 }
            break;

        case "decrement":
            return { count: currentState.count - 1 }
            break;
        case "incrementBySetAmount":
            return { count: currentState.count + action.payload }
            break;

        default:
            return currentState;
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })} className='btn bg-pink-300 text-white p-2 rounded-md'>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })} className='btn bg-black ml-3 text-white p-2 rounded-md'>Decrement</button>
            <button onClick={() => dispatch({ type: 'incrementBySetAmount', payload: 10 })} className='btn bg-yellow-400 ml-3 text-white p-2 rounded-md'>Increment By 3</button>

        </div>
    );
};

export default UseReducer;