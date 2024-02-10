import React, { useEffect, useState } from 'react';

const AnotherExampleUseEffect = () => {
    const [hidden, setHidden] = useState(false)
    return (
        <div>
            <button onClick={() => setHidden((prev) => !prev)} className='btn bg-sky-100 text-black-400 px-3 py-1 mb-2'>
                {hidden ? 'Show' : 'Hide'}
            </button>
            {!hidden && <ToDo/>}
        </div>
    );
};


const ToDo = () =>{
    const controller = new AbortController();
    const signal = controller.signal;
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/todos/1`, {signal})
        .then(res => res.json())
        .then(data => alert(data.title));

        return () =>{
            controller.abort();
        }
    }, []);
    return <div className='bg-purple-500 py-20 text-white font-extrabold text-6xl'>Todo</div>
};
export default AnotherExampleUseEffect;