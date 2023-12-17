"use client"

import {useRouter} from "next/navigation";
import { signIn } from "next-auth/react";
import styles from "./page.module.css"
const Registartion = () => {
    
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const firstname = event.target[0].value;
        const lastname = event.target[1].value;
        const password = event.target[2].value;


        try {
            const res = await fetch("/api/auth/registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    firstname,
                    lastname,
                    password
                }),
            })

            res.status === 201;
            signIn("credentials", {firstname, lastname, password, callbackUrl:"/"})
        } catch (error) {
            
                throw new Error(error);
            
        }
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
                <button className={styles.button}>Зарегестрироваться</button>
            </form>
        </div>
     );
}
 
export default Registartion;