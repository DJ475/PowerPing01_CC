import React, {ReactNode} from "react";

type divContainerBtn = {
    children : ReactNode;
}

// function for div/container jsx
export function ContainerBtn({children} : divContainerBtn){
    return(
        <div className="containerInputButtons">
            {children}
        </div>
    );
}
