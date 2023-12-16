"use client"

import { signIn } from "next-auth/react";

const Login = () => {
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const firstname = String(event.target[0].value);
        const lastname = String(event.target[1].value);
        const password = String(event.target[2].value);


        signIn("credentials", {firstname, lastname, password, callbackUrl:"/"});
    }
    
    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Имя"/>
                <input type="text" placeholder="Фамилия"/>
                <input type="password" placeholder="Пароль"/>
                <button>Войти</button>
            </form>
        </div>
     );
}
 
export default Login;