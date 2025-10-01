import React, {ReactNode} from "react";
import styles from "./ButtonContainer.module.css"

type divContainerBtn = {
    children : ReactNode;
}

// function for div/container jsx
export function ContainerBtn({children} : divContainerBtn){
    return(
        <div className={styles.containerInputButtons}>
            {children}
        </div>
    );
}
