"use client"

import { signIn } from "next-auth/react";
import styles from "./page.module.css"


const Login = () => {
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const firstname = String(event.target[0].value);
        const lastname = String(event.target[1].value);
        const password = String(event.target[2].value);


        signIn("credentials", {firstname, lastname, password, callbackUrl:"/"});
    }
    
    return ( 
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.field}>
                    <div className={styles.label}>Имя</div>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.field}>
                    <div className={styles.label}>Фамилия</div>
                    <input className={styles.input} type="text"/>
                </div>
                <div className={styles.field}>
                    <div className={styles.label}>Пароль</div>
                    <input className={styles.input} type="Password"/>
                </div>
                <button className={styles.button}>Войти</button>
            </form>
        </div>
     );
}
 
export default Login;