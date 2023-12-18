import Image from "next/image";
import styles from "./page.module.css";

const Candidates = () => {
    return (
        <div className={styles.container}>
            <div className={styles.candidate}>
                <Image
                    className={styles.img}
                    src={"/1.jpg"}
                    alt="Березкин Дмитрий Петрович"
                    width={700}
                    height={500}
                />
                <h1 className={styles.name}>Березкин Дмитрий Петрович</h1>
                <p className={styles.info}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className={styles.candidate}>
                <Image
                    className={styles.img}
                    src={"/2.jpg"}
                    alt="Хиневич Максим Дмитриевич"
                    width={700}
                    height={500}
                />
                <h1 className={styles.name}>Хиневич Максим Дмитриевич</h1>
                <p className={styles.info}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className={styles.candidate}>
                <Image
                    className={styles.img}
                    src={"/3.jpg"}
                    alt="Касесалу Герман Янович"
                    width={700}
                    height={500}
                />
                <h1 className={styles.name}>Касесалу Герман Янович</h1>
                <p className={styles.info}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    );
};

export default Candidates;
