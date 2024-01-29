import React from 'react';
type TCounter = {
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>
}
const UseStateExample = ({ counter, setCounter }: TCounter) => {

    return (
        <div className='w-10/12 mx-auto '>
            <h1 className='text-center text-4xl text-yellow-500'>{counter}</h1>
            <div className='flex gap-10 justify-center'>
                <button onClick={() => setCounter(counter + 1)} className='btn bg-green-500 text-white p-2 text-[14px] rounded-xl'>Increament</button>
            </div>
        </div>
    );
};

export default UseStateExample;