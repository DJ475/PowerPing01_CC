import { ContainerBtn } from './ButtonContainer';
import { LoginBtnOBJ } from './LoginButton';
import { LoginInputOBJ } from './InputField';
import { RegisterBtnOBJ } from './RegisterButton';

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
        <h3 id={styles.textGreeting}> <u>PowerPing01</u></h3>
        </header>
        
        {/* Call Login Function */}
        <LoginInputOBJ
        typeInput="text"
        placeholder="Username" 
        value={username}
        onChangeElement={(e)=>setUsername(e.target.value)}
        />

        <LoginInputOBJ
        typeInput="password"
        placeholder="Password" 
        value={passsword}
        onChangeElement={(e)=>setPassword(e.target.value)}
        />

        

        {/* <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="forgotPassword" element={<ForgotPassword/>}/>
        </Routes> */}

        <div id={styles.divForgotPswd}>
        <h3> Forgot Password? </h3>
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