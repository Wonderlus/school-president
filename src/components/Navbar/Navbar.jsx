"use client"

import {signOut, useSession} from "next-auth/react";
import styles from "./Navbar.module.css"
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    
    const {data: session, status} = useSession();
    return ( 
        <header className={styles.container}>
            <div className={styles.navbar}>
                <Image src={"/logo.jpg"} alt="School2098" className={styles.logo} width={50} height={50}/>
                <div className={styles.links}>
                    <Link className={styles.link} href={"/"}>Главная</Link>
                    <Link className={styles.link} href={"/candidates"}>Кандидаты</Link>
                    <Link className={styles.link} href={"/vote"}>Голосование</Link>
                </div>
                {status === "unauthenticated" || status === "loading" ? (
                    <div className={styles.authLinks}>
                        <Link className={styles.link} href={"/login"}>Войти</Link>
                        <Link className={styles.link} href={"/registration"}>Зарегестрироваться</Link>
                    </div>

                ) : (
                    <div className={styles.authLinks}>
                        <div className={styles.firstname}>{session.user.fullname}</div>
                        <button className={styles.signout} onClick={() => signOut()}>Выйти</button>
                    </div>
                )}
            </div>
        </header>
     );
}
 
export default Navbar;