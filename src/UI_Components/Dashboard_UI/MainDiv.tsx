import React, { ReactElement, ReactNode } from "react";

type mainDivProp={
    children : ReactElement<ReactNode>;
}

export function MainDivContainer({children}:mainDivProp)
{
    return (
        <div className="divMain">
            {children}
        </div>
    );
}