import { ReactNode } from "react";

type ContainerProp = {
    children: ReactNode;
}

export function ParentContainer({children}: ContainerProp){
    return (
        <div className="DivContainer">
            {children}
        </div>
    );
}