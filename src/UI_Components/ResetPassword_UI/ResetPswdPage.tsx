import React, { useState } from "react";

import {ParentContainer} from "./ParentContainer";
import {FormTop} from "./FormTop"
import {FormBottom} from "./FormBottom";

import { MainPageLayout } from "../Shared_Components/MainPageLayout"

export function ResetPasswordPage()
{
    const [emailString,setEmail] = useState("");

    return(
        <MainPageLayout
            showHeaderMessage = {true}
        >
            <ParentContainer>
                <FormTop 
                    emailString = {emailString}
                    setEmail={(e)=>setEmail(e.target.value)}
                />

                <FormBottom 
                    emailValueEntered = {emailString}
                />
                
            </ParentContainer>
        </MainPageLayout>
        

        // 
    );
}