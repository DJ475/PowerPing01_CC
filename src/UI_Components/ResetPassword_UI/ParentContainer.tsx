import { ReactNode } from "react";
import styles from "./ParentContainer.module.css"

type ContainerProp = {
    children: ReactNode;
}

export function ParentContainer({children}: ContainerProp){
    return (
        <div className={styles.DivContainer}>
            {children}
        </div>
    );
}