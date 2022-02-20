import React, { useState } from 'react';

const UserForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordCon, setPasswordCon] = useState("");

    const createUser = (e) => {
        e.preventDefault();

        const newUser = {firstName, lastName, email, password, passwordCon};
        console.log("Welcome", newUser);
    };

    return(
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>Password Confirmed:</label>
                <input type="password" onChange={(e) => setPasswordCon(e.target.value)}/>
            </div>
            <div>
                <h3>Your Form Data</h3>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Password Confirmed: {passwordCon}</p>
            </div>
        </form>
    )
}
export default UserForm;