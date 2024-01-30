import React, { useState } from 'react';

const UseStateExample2 = () => {
    // const [name, setName] = useState("")
    // const [email, setemail] = useState("")
    // console.log(name, email);
    const [user, setUser] = useState({name: '', email: ''})
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(user);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setUser({...user, name: e.target.value})} className='border' placeholder='your name' type="text" name="name" />
            <input onChange={(e) => setUser({...user, email: e.target.value})} className='border' placeholder='your email' type="eamil" name="email" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UseStateExample2;