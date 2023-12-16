"use client"

import {useRouter} from "next/navigation";
import { signIn } from "next-auth/react";

const Registartion = () => {
    
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const firstname = event.target.value;
        const lastname = event.target.value;
        const password = event.target.value;

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
            signIn("credentials", {firstname, lastname, password, callbackUrl:"http://localhost:3000/"});
        } catch (error) {
            
                throw new Error(error);
            
        }
    }
    
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Имя" />
                <input type="text" placeholder="Фамилия" />
                <input type="password" placeholder="Password" />
                <button>Registrate</button>
            </form>
        </div>
     );
}
 
export default Registartion;