import styles from "./InnerDiv.module.css";

import React, { ReactElement, ReactNode } from "react";

type InnerDivProp = {
    children : ReactNode;
}

export function InnerDivContainer({children}: InnerDivProp)
{
    return(
        <div className="innerContainer">
            {children}
        </div>
    );
}