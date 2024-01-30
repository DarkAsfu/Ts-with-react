import React, { useEffect, useState } from 'react';

const UseEffectCleanUp = () => {
    const [hidden, setHidden] = useState(false)
    return (
        <div>
            <button onClick={() => setHidden((prev) => !prev)} className='btn bg-sky-100 text-black-400 px-3 py-1 mb-2'>
                {hidden ? 'Show' : 'Hide'}
            </button>
            {!hidden && <Counter />}
        </div>
    );
};

const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Render');
            setCount((prev) => prev + 1);
        }, 1000);
        return () =>{
            clearInterval(intervalId)
        }
    }, [])
    return (
        <div>
            <h1 className='bg-sky-200 p-10 border border-sky-500'>{count}</h1>
        </div>
    );
}
export default UseEffectCleanUp;