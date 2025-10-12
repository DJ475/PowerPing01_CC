
import {Button} from "../Shared_Components/Button"

import styles from "./FormBottom.module.css"

async function registerNewUser(email: string) {
    console.log("Got Email Vaue of:" + email);
}

type BottomProp = {
    emailValueEntered: string;
}

export function FormBottom({emailValueEntered}: BottomProp)
{
    return(
        <div className={`mx-auto ${styles.divContainerButton}`}>
            <Button
                variant="resetPswdBtn"
                size="md"
                buttonText="Send Reset Request"
                onClickFunction={(e) => registerNewUser(emailValueEntered)}     
            />
        </div>
    );
}