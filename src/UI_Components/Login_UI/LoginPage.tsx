import { ContainerBtn } from './ButtonContainer';
import { LoginBtnOBJ } from './LoginButton';
import { InputOBJ } from '../Shared_Components/InputField';
import { RegisterBtnOBJ } from './RegisterButton';

import {Link } from "react-router-dom";

import styles from "./LoginPage.module.css"

import React, { useState } from 'react';
// import LoginPage from "./UI_Components/Login_UI/Login"
// import ForgotPassword from "./UI_Components/ResetPassword_UI/ResetPswd"

export function LoginPage()
{
    const [username,setUsername] = useState("");
    const [passsword,setPassword] = useState("");
    return (
        <div className={styles.ExampleBackground}>
        {/* <div className="NavBarContainer">
        </div> */}
        <header >
            <h3 className="powerPingLogo"> <u>PowerPing01</u></h3>
        </header>
        
        {/* Call Login Function */}
        <InputOBJ
        typeInput="text"
        placeholder="Username" 
        value={username}
        onChangeElement={(e)=>setUsername(e.target.value)}
        />

        <InputOBJ
        typeInput="password"
        placeholder="Password" 
        value={passsword}
        onChangeElement={(e)=>setPassword(e.target.value)}
        />

        <div id={styles.divForgotPswd}>
            <Link to="/forgotPassword"> Forgot Password? </Link>
            <br />
            <br />
        </div>
        
        <ContainerBtn>
            <LoginBtnOBJ 
                loginBtnText="Login"
                onClickListenerL={(e)=>{alert("Logging In Now")}}
            />
            
            
            <RegisterBtnOBJ
                registerBtnText="Register"
                onClickListenerR={(e)=>{alert("Registering Now")}}
            />
        </ContainerBtn>



    </div>
    );
}