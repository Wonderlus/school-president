"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { signIn, signOut } from "next-auth/react";
const Quiz = () => {
    const [survey, setSurvey] = useState(["", "", "", ""]);

    const handleSurvey = async () => {
        const fullname = session.user.fullname;
        const level = session.user.level;
        const password = session.user.password;
        const fullfind = (fullname.replaceAll(" ", "") + level).toLowerCase();

        try {
            const res = await fetch("/api/survey", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullfind,
                    survey,
                }),
            });
            if (res.status === 200) {
                alert("Вы успешно проголосовали");
                signOut();
                signIn("credentials", {
                    fullfind,
                    password,
                    callbackUrl: "/survey",
                });
            }
        } catch (error) {
            throw new Error(error);
        }
    };

    const { data: session, status } = useSession();

    return (
        <div className={styles.container}>
            <form
                className={styles.containerInner}
                onSubmit={(event) => {
                    event.preventDefault();
                    handleSurvey();
                }}
            >
                <div className={styles.surveyCard}>
                    <Image
                        src={"/quiz1.png"}
                        alt="Фотография"
                        width={400}
                        height={300}
                    />
                    <h2>Название</h2>
                    <div className={styles.form}>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
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
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
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
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
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
                    </div>
                    {status === "authenticated" ? (
                        <div>
                            {session.user.survey[0] != [] ? (
                                <div>Вы выбрали дату: {session.user.survey[0]}</div>
                            ) : (<></>)}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                <div className={styles.surveyCard}>
                    <Image
                        src={"/quiz2.png"}
                        alt="Фотография"
                        width={400}
                        height={300}
                    />
                    <h2>Название</h2>
                    <div className={styles.form}>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[1] = "25.12.2023";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz2"
                            />
                            <label>25.12.2023</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[1] = "01.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz2"
                            />
                            <label>01.01.2024</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[1] = "10.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz2"
                            />
                            <label>10.01.2024</label>
                        </div>
                    </div>
                    {status === "authenticated" ? (
                        <div>
                            {session.user.survey[1] != [] ? (
                                <div>Вы выбрали дату: {session.user.survey[1]}</div>
                            ) : (<></>)}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                <div className={styles.surveyCard}>
                    <Image
                        src={"/quiz2.png"}
                        alt="Фотография"
                        width={400}
                        height={300}
                    />
                    <h2>Название</h2>
                    <div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[2] = "25.12.2023";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz3"
                            />
                            <label>25.12.2023</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[2] = "01.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz3"
                            />
                            <label>01.01.2024</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[2] = "10.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz3"
                            />
                            <label>10.01.2024</label>
                        </div>
                    </div>
                    {status === "authenticated" ? (
                        <div>
                            {session.user.survey[2] != [] ? (
                                <div>Вы выбрали дату: {session.user.survey[2]}</div>
                            ) : (<></>)}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className={styles.surveyCard}>
                    <Image
                        src={"/quiz2.png"}
                        alt="Фотография"
                        width={400}
                        height={300}
                    />
                    <h2>Название</h2>
                    <div className={styles.form}>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[3] = "25.12.2023";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date1"}
                                name="quiz4"
                            />
                            <label>25.12.2023</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[3] = "01.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date2"}
                                name="quiz4"
                            />
                            <label>01.01.2024</label>
                        </div>
                        <div className={styles.opportunity}>
                            <input
                                className={styles.radio}
                                onClick={() => {
                                    setSurvey((prev) => {
                                        prev[3] = "10.01.2024";
                                        return prev;
                                    });
                                }}
                                type="radio"
                                value={"date3"}
                                name="quiz4"
                            />
                            <label>10.01.2024</label>
                        </div>
                    </div>
                    {status === "authenticated" ? (
                        <div>
                            {session.user.survey[3] != [] ? (
                                <div>Вы выбрали дату: {session.user.survey[3]}</div>
                            ) : (<></>)}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                {status === "authenticated" ? (
                    <button className={styles.button}>Проголосовать</button>
                ) : (
                    <div>
                        Зарегистрируйтесь или войдите, чтобы проголосовать
                    </div>
                )}
            </form>
        </div>
    );
};

export default Quiz;
