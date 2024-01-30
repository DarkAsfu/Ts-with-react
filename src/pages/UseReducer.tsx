import React, { useReducer, useState } from 'react';
type TAction = {
    type: string;
    payload: string;
}
const initialState = {name: "", email: ""};
const reducer = (currentState: typeof initialState, action: TAction) => {
    switch (action.type) {
        case "addName":
            return {...currentState, name: action.payload}
        case "addEmail":
            return {...currentState, email: action.payload}
        default:
            return currentState;
    }
}
const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(state);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e)=>dispatch({type: 'addName', payload: e.target.value})}
                className='border px-2 py-4 mr-2 rounded-xl'
                placeholder='your name'
                type="text"
                name="name" />
            <input onChange={(e)=>dispatch({type: 'addEmail', payload: e.target.value})}
                className='border px-2 py-4 mr-2 rounded-xl'
                placeholder='your email'
                type="eamil"
                name="email" />
            <button className='bg-[#f8f8f8] p-4 rounded-xl' type="submit">Submit</button>
        </form>
    );
};

export default UseReducer;