import React from "react";
import {InputOBJ} from "../Shared_Components/InputField";
import {Link} from "react-router-dom"

import styles from "./FormTop.module.css"

type FormTopProps = {
    emailString: string;
    setEmail: (e: React.ChangeEvent<HTMLInputElement>)=> void;
}

export function FormTop({emailString,setEmail}: FormTopProps){
    return(
        <div className={styles.divWrapper}>
            <InputOBJ typeInput={"email"} placeholder={"Email"} value={emailString} onChangeElement={setEmail}></InputOBJ>
            <Link to="/" className={styles.linkStyle}> Back to Login </Link>
        </div>
    );
}