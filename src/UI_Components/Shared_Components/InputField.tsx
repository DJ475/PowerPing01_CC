import styles from "../Shared_Components/InputField.module.css"

type inputCredsProp = {
    typeInput: "text" | "password" | "email";
    variation: "usernameInput" | "passwordInput" | "emailInput";
    size: "sm" | "md" | "lg";
    placeholder: string;
    value: string;
    onChangeElement: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// function for text input jsx
export function InputOBJ({typeInput, variation, size ,placeholder,value,onChangeElement}: inputCredsProp){
    return (
            <div className={styles.containerInputCreds}>
                <input className={`${styles[variation]} ${styles[size]}`} type={typeInput} placeholder={placeholder} onChange={onChangeElement} value={value}/>
            </div>
        );
}
