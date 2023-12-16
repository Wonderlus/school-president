"use client"

import { signIn } from "next-auth/react";

const Login = () => {
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const firstname = event.target.value;
        const lastname = event.target.value;
        const password = event.target.value;

        signIn("credentials", {firstname, lastname, password, callbackUrl:"http://localhost:3000/"});
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