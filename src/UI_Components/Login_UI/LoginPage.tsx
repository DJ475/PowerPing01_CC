import { ContainerBtn } from './ButtonContainer';
import { InputOBJ } from '../Shared_Components/InputField';

import {LoginUser} from "../../Classes/Login";

// import { LoginBtnOBJ } from './LoginButton';
// import { RegisterBtnOBJ } from './RegisterButton';

import {Link, useNavigate } from "react-router-dom";

import {Button} from "../Shared_Components/Button"
import {MainPageLayout} from "../Shared_Components/MainPageLayout"


import React, { useState } from 'react';


// import LoginPage from "./UI_Components/Login_UI/Login"
// import ForgotPassword from "./UI_Components/ResetPassword_UI/ResetPswd"

let LoginOBJ: LoginUser;

export function LoginPage()
{
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigateOBJ = useNavigate();
    LoginOBJ = new LoginUser(navigateOBJ); 

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
            value={password}
            onChangeElement={(e)=>setPassword(e.target.value)}
            />

            <div className="divForgotPswd">
            <Link to="/forgotPassword"> Forgot Password? </Link>
            <br />
            <br />
            </div>

            <ContainerBtn>
            <Button 
                variant="loginBtn"
                size="sm"
                buttonText="Login"
                onClickFunction={(e)=>{
                    LoginOBJ.setUsername("DJ");
                    LoginOBJ.setPassword("123abc@");
                    LoginOBJ.login()
                }}
            />


            <Button
                variant="registerBtn"
                size="md"
                buttonText='Register'
                onClickFunction={(e)=>{alert("Registering User Now")}}
            />
            </ContainerBtn>

        </MainPageLayout>
    );
}