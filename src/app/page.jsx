import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>
                ВЫБОРЫ РУКОВОДИТЕЛЯ ПАРЛАМЕНТА ШКОЛЫ
            </h1>
            <Image className={styles.mainImg} src={"/main.jpg"} alt="" width={1878} height={645}/>
        </main>
    );
}
