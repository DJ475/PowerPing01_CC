import styles from "./LoginButton.module.css"

type loginBtnProp = {
    loginBtnText: string;
    onClickListenerL: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

// function for login button jsx
export function LoginBtnOBJ({loginBtnText,onClickListenerL: onClickListenerE}: loginBtnProp)
{
    return (
            <button id={styles.loginBtn} type="button" onClick={onClickListenerE}>{loginBtnText}</button>
    );
}
