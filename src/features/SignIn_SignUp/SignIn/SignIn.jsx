import React from 'react'
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

import "../SignIn_SignUp.scss";
import SignInFunc from "./Functions";

import Welcome from '../../Welcome/Welcome.jsx';
import {signInWithGoogle, signInWithFacebook} from "../../../app/firebase";
import {UsersSelector} from "../../Users/UsersSlice";
import useInput from "../../../Hooks/useInput";
import { Button, TextField } from '@material-ui/core';



export default function SignIn() {

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

            <form onSubmit={(e) => {
                e.preventDefault();
                SignInFunc(email, password);
                }}>
                <TextField type="text" label="Email" value={email} onChange={setEmail}/>

                <TextField type="password" label="Password" value={password} onChange={setPassword}/>
                
                <Button variant="contained" color="primary" type="submit">Sign In</Button>
            </form>
           
            </div>
        </div>
    )
}
