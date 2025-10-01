import styles from "./InputField.module.css"

type loginCredsProp = {
    typeInput: "text" | "password";
    placeholder: string;
    value: string;
    onChangeElement: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// function for text input jsx
export function LoginInputOBJ({typeInput,placeholder,onChangeElement}: loginCredsProp){
    return (
        <div className={styles.containerInputCreds}>
        <input type={typeInput} placeholder={placeholder} onChange={onChangeElement} />
      </div>
    );
}
