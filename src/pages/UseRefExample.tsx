import React, { useRef, useState } from 'react';

const UseRefExample = () => {
    const myRef = useRef(0);
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);
    const increment = () =>{
        (status) ? myRef.current = myRef.current - 1 : myRef.current = myRef.current + 1
        setCount(count+1)
        setStatus(!status)
        console.log('myRef =>', myRef.current);
        console.log("count =>", count);
    }
    return (
        <div>
            <h1 className='text-xl font-bold mb-3'>useRef</h1>
            <button onClick={()=>increment()} className={`${status ? 'bg-red-500' : 'bg-slate-300' } rounded-xl text-white px-4 py-2 `}>{myRef.current}</button>
        </div>
    );
};

export default UseRefExample;