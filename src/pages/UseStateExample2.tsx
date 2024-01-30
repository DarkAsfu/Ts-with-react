import React, { useState } from 'react';

const UseStateExample2 = () => {
    // const [name, setName] = useState("")
    // const [email, setemail] = useState("")
    // console.log(name, email);
    const [user, setUser] = useState({ name: '', email: '' })
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
    }
    const setHandleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const name = e.target.name;
        setUser({ ...user, [name]: e.target.value })
    }
    /* DRY => Don't repeat yourseft */
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={setHandleChange}
                className='border'
                placeholder='your name'
                type="text"
                name="name" />
            <input onChange={setHandleChange}
                className='border'
                placeholder='your email'
                type="eamil"
                name="email" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UseStateExample2;