import React, { useReducer, useState } from 'react';

const initialState = { count: 0 };
const reducer = (currectState, action) => {
    switch (action.type) {
        case "increment":
            return { count: currectState.count + 1 }
            break;

        case "decrement":
            return { count: currectState.count - 1 }
            break;

        default:
            return currectState;
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({type: 'increment'})} className='btn bg-pink-300 text-white p-2 rounded-md'>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})} className='btn bg-black ml-3 text-white p-2 rounded-md'>Decrement</button>
            
        </div>
    );
};

export default UseReducer;