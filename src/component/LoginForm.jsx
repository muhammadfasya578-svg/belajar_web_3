import { useState } from "react";
import buttonStyles from "./Button.module.css";
import inputStyles from "./Input.module.css";
import styles from "./LoginForm.module.css";

function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username.trim() === "") {
            setErrorMsg("username tidak boleh kosong");
            console.log("usename tidak boleh kosong");
            return;

        }

        if (password.trim() === "") {
            setErrorMsg("password tidak boleh kosong");
            console.log("password tidak boleh kosong");
            return;

        }
        
        setIsLoading(true);

        setTimeout(function () {
            setIsLoading(false);
            alert(`username: ${username}, password: ${password}`);
        console.log(`username: ${username}, password: ${password}`);
        }, 3000)
        
    };

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Login</h1>
                {errorMsg && <p className={styles.error}>{errorMsg}</p>}

                <input
                    className={inputStyles.input}
                    type="text"
                    placeholder="Masukkan username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    className={inputStyles.input}
                    type="password"
                    placeholder="Masukkan password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {isLoading && <p>loading ...</p>}
                <button type="submit" disabled={isLoading} className={buttonStyles.button}>
                    Simpan
                </button>
            </form>
        </div>
    );
}

export default LoginForm;