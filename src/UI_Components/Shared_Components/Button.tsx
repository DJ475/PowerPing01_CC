import React from "react";

import styles from "./Button.module.css"

type buttonProp = {
    variant: "loginBtn" | "registerBtn" | "resetPswdBtn";
    size: "sm" | "md" | "lg";
    buttonText: string;
    onClickFunction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// dynamic button prop allowing change in size and variants of different buttons
export function Button({variant,size,buttonText,onClickFunction: onClickListener} : buttonProp){
    return(
        <button 
            className= {`${styles[variant]} ${styles[size]}`} onClick={onClickListener}>
            {buttonText} 
        </button>        
    );
}