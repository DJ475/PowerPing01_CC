import React, { ReactNode } from "react";
import styles from "./RegisterButton.module.css"


type registerBtnProp = {
    registerBtnText: string;
    onClickListenerR: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// function for register jsx
export function RegisterBtnOBJ({registerBtnText, onClickListenerR}: registerBtnProp)
{
    return (
        <button id={styles.registerBtn} type="button" onClick={onClickListenerR}>{registerBtnText}</button>
    );
} 

