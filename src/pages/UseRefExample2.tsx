import React, { useEffect, useRef } from 'react';
import CustomInput from '../components/CustomInput';

const UseRefExample2 = () => {
    const myRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        myRef?.current?.focus();
    }, [])
    return (
        <div>
            <h1>Reference of a HTML tag using useRef</h1>
            <form>
                <CustomInput className='border border-yellow-500 px-2 py-3 rounded-lg my-3' ref={myRef}/>
                <button type="submit"
                    className='bg-yellow-400 px-4 py-3'
                >
                    submit
                </button>
            </form>
        </div>
    );
};

export default UseRefExample2;