import { ContainerBtn } from './ButtonContainer';
import { InputOBJ } from '../Shared_Components/InputField';

// import { LoginBtnOBJ } from './LoginButton';
// import { RegisterBtnOBJ } from './RegisterButton';

import styles from "./LoginPage.module.css"

import {Link } from "react-router-dom";

import {Button} from "../Shared_Components/Button"
import {MainPageLayout} from "../Shared_Components/MainPageLayout"


import React, { useState } from 'react';
// import LoginPage from "./UI_Components/Login_UI/Login"
// import ForgotPassword from "./UI_Components/ResetPassword_UI/ResetPswd"

export function LoginPage()
{
    const [username,setUsername] = useState("");
    const [passsword,setPassword] = useState("");
    return (
        
        <MainPageLayout
            showHeaderMessage = {true}
        > 

            {/* Call Login Function */}
            <InputOBJ
            typeInput="text"
            variation="usernameInput"
            size="md"
            placeholder="Username" 
            value={username}
            onChangeElement={(e)=>setUsername(e.target.value)}
            />

            <InputOBJ
            typeInput="password"
            variation="passwordInput"
            size="md"
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
            <Button 
                variant="loginBtn"
                size="sm"
                buttonText="Login"
                onClickFunction={(e)=>{alert("Logging In Now")}}
            />


            <Button
                variant="registerBtn"
                size="md"
                buttonText='Register'
                onClickFunction={(e)=>{alert("Registering Now")}}
            />
            </ContainerBtn>

        </MainPageLayout>
    );
}