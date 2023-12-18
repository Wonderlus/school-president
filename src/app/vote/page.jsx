"use client";

import { useSession } from "next-auth/react";
import styles from "./page.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Vote = () => {
    const { data: session, status } = useSession();

    const router = useRouter()

    const handleVote = async (id, name) => {
        const agree = confirm(`Вы уверены, что хотите проголосовать за ${name}? У вас есть только 1 голос, изменить его будет невозможно.`)


        if (agree) {

            const fullname = session.user.fullname;
            const level = session.user.level;
            const password = session.user.password;
            const fullfind = (fullname.replaceAll(" ", "") + level).toLowerCase();
            const votedFor = session.user.votedFor;

            try {
    
                const res = await fetch("/api/vote", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullfind,
                        id
                    }),
                })

                if (res.status === 200) {
                    router.replace("/");
                    alert("Ваш голос принят")
                };
                
            } catch (error) {
                throw new Error(error)
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.candidate}>
                <Image
                    src={"/1.jpg"}
                    alt="Березкин Дмитрий Петрович"
                    width={300}
                    height={400}
                />
                <h4>Березкин Дмитрий Петрович</h4>
                {status === "unauthenticated" || status === "loading" ? (
                    <div className={styles.needLogin}>
                        Зарегестрируйтесь или войдите, чтобы проголосовать
                    </div>
                ) : (
                    <>
                        {session.user.votedFor === 0 ? 
                        (
                            <button className={styles.vote} onClick={() => handleVote(1, "Березкина Дмитрия Петровича")}>Голосовать</button>
                        ) : (
                            <div>Вы уже проголосовали за кандидата номер {session.user.votedFor}</div>
                        )}
                    </>
                )
                    
                }
            </div>
            <div className={styles.candidate}>
                <Image
                    src={"/2.jpg"}
                    alt="Хиневич Максим Дмитриевич"
                    width={300}
                    height={400}
                />
                <h4>Хиневич Максим Дмитриевич</h4>
                {status === "unauthenticated" || status === "loading" ? (
                    <div className={styles.needLogin}>
                        Зарегестрируйтесь или войдите, чтобы проголосовать
                    </div>
                ) : (
                    <>
                        {session.user.votedFor === 0 ? 
                        (
                            <button className={styles.vote} onClick={() => handleVote(2, "Хиневича Максима Дмитриевича")}>Голосовать</button>
                        ) : (
                            <div>Вы уже проголосовали за кандидата номер {session.user.votedFor}</div>
                        )}
                    </>
                )
                    
                }
            </div>
            <div className={styles.candidate}>
                <Image
                    src={"/3.jpg"}
                    alt="Касесалу Герман Янович"
                    width={300}
                    height={400}
                />
                <h4>Касесалу Герман Янович</h4>
                {status === "unauthenticated" || status === "loading" ? (
                    <div className={styles.needLogin}>
                        Зарегестрируйтесь или войдите, чтобы проголосовать
                    </div>
                ) : (
                    <>
                        {session.user.votedFor === 0 ? 
                        (
                            <button className={styles.vote} onClick={() => handleVote(3, "Касесалу Германа Яновича")}>Голосовать</button>
                        ) : (
                            <div>Вы уже проголосовали за кандидата номер {session.user.votedFor}</div>
                        )}
                    </>
                )
                    
                }
            </div>
        </div>
    );
};

export default Vote;
