import React from 'react'
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import "../SignIn_SignUp.scss";
import SignUpFunc from "./Functions";
import {signInWithGoogle, signInWithFacebook} from "../../../app/firebase";
import {UsersSelector} from "../../Users/UsersSlice";

import useInput from "../../../Hooks/useInput";
import Welcome from '../../Welcome/Welcome';
import { Button, TextField } from '@material-ui/core';

export default function SignUp() {

    const [username, setUsername] = useInput("");
    const [email, setEmail] = useInput("");
    const [password, setPassword] = useInput("");

    const users = useSelector(UsersSelector);

    return (
        <div className="SignIn_SignUp">
            <Welcome 
                h1="Radon Development Network" 
                h3="Made by Vansh" 
                style={{paddingTop: "50px"}} />
            <div className="sign_nav">
                <NavLink to="/User/SignUp" activeClassName="activeSite">Sign Up</NavLink>
                <NavLink className="site" to="/User/SignIn" activeClassName="activeSite">Sign In</NavLink>
            </div>
            <form style={{minHeight: "250px"}} onSubmit={(e) => {
                e.preventDefault();
                SignUpFunc(username, email, password);
                }}>
                <TextField type="text" label="UserName" value={username} onChange={setUsername}/>
            
                <TextField type="text" label="Email" value={email} onChange={setEmail}/>
                
                <TextField type="password" label="Password" value={password} onChange={setPassword}/>
                
                <Button variant="contained" color="primary" type="submit">Sign Up</Button>
            </form>
            
        </div>
    )
}
