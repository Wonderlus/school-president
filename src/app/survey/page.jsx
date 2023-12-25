"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

const Quiz = () => {
    const [vote, setVote] = useState(["", "", "", ""]);

    console.log(vote);

    return (
        <div className={styles.container}>
            <div className={styles.containerInner}>
                <div className={styles.surveyCard}>
                    <Image
                        src={"/quiz1.png"}
                        alt="Фотография"
                        width={400}
                        height={300}
                    />
                    <h2>Название</h2>
                    <form className={styles.form}
                        onSubmit={(event) => {
                            event.preventDefault();
                            console.log(vote);
                        }}
                    >
                        <div className={styles.opportunity}>
                            <input className={styles.radio}
                                onClick={() => {
                                    setVote((prev) => {
                                        prev[0] = "25.12.2023";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz1"
                            />
                            <label>25.12.2023</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input className={styles.radio} 
                                onClick={() => {
                                    setVote((prev) => {
                                        prev[0] = "01.01.2024";
                                        return prev;
                                    });
                                    
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz1"
                            />
                            <label>01.01.2024</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input className={styles.radio}
                                onClick={() => {
                                    setVote((prev) => {
                                        prev[0] = "10.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz1"
                            />
                            <label>10.01.2024</label>
                        </div>
                        <button className={styles.button}>Проголосовать</button>
                    </form>
                </div>


                <div className={styles.surveyCard}>
                    <Image
                        src={"/quiz2.png"}
                        alt="Фотография"
                        width={400}
                        height={300}
                    />
                    <h2>Название</h2>
                    <form className={styles.form}
                        onSubmit={(event) => {
                            event.preventDefault();
                            console.log(vote);
                        }}
                    >
                        <div className={styles.opportunity}>
                            <input className={styles.radio}
                                onClick={() => {
                                    setVote((prev) => {
                                        prev[1] = "25.12.2023";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz1"
                            />
                            <label>25.12.2023</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input className={styles.radio}
                                onClick={() => {
                                    setVote((prev) => {
                                        prev[1] = "01.01.2024";
                                        return prev;
                                    });
                                    
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz1"
                            />
                            <label>01.01.2024</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input className={styles.radio}
                                onClick={() => {
                                    setVote((prev) => {
                                        prev[1] = "10.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz1"
                            />
                            <label>10.01.2024</label>
                        </div>
                        <button className={styles.button}>Проголосовать</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Quiz;