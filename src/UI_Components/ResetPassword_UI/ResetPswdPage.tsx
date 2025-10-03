import React, { useState } from "react";

import {ParentContainer} from "./ParentContainer";
import {FormTop} from "./FormTop"
import {FormBottom} from "./FormBottom";

export function ResetPasswordPage()
{
    const [emailString,setEmail] = useState("");

    return(
        <ParentContainer>
            <header >
                <h3 className="powerPingLogo"> <u>PowerPing01</u></h3>
            </header>

            <FormTop 
                emailString={emailString}
                setEmail={(e)=>setEmail(e.target.value)}
            />

            <FormBottom 

            />
            
        </ParentContainer>

        // 
    );
}