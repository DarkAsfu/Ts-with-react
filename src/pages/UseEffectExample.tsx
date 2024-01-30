import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
    const [hidden, setHidden] = useState(false)
    useEffect(() =>{
        console.log('render');
        return () =>{
            console.log('Inside CleanUp');
        }
    }, [hidden])
    return (
        <div>
            <button onClick={()=>setHidden((prev) => !prev)} className='btn bg-sky-100 text-black-400 px-3 py-1'>Click</button>
        </div>
    );
};

export default UseEffectExample;

// render, event, effect
