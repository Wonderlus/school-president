"use client"

import {signOut, useSession} from "next-auth/react";
import styles from "./Navbar.module.css"
import Link from "next/link";

const Navbar = () => {
    
    const {data: session, status} = useSession();
    return ( 
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.logo}>Logo</div>
                {status === "unauthenticated" || status === "loading" ? (
                    <div>
                        <Link href={"/login"}>Войти</Link>
                        <Link href={"/registration"}>Зарегестрироваться</Link>
                    </div>

                ) : (
                    <div className={styles.auth}>
                        <div className={styles.firstname}>{session.user.firstname}</div>
                        <div className={styles.lastname}>{session.user.lastname}</div>
                        <button className={styles.signout} onClick={() => signOut()}>Выйти</button>
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Navbar;