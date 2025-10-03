import styles from "../Shared_Components/InputField.module.css"

type inputCredsProp = {
    typeInput: "text" | "password" | "email";
    placeholder: string;
    value: string;
    onChangeElement: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// function for text input jsx
export function InputOBJ({typeInput,placeholder,value,onChangeElement}: inputCredsProp){
    
    if(typeInput == "email")
    {
        return (
            <div className={styles.containerInputCreds}>
                <input className={styles.emailInputStyle} type={typeInput} placeholder={placeholder} onChange={onChangeElement} value={value}/>
            </div>
        );
    }
    else
    {
        return (
            <div className={styles.containerInputCreds}>
                <input type={typeInput} placeholder={placeholder} onChange={onChangeElement} value={value} />
            </div>
        );
    }
}
