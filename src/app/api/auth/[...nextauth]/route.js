import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import connect from "@/utils/db";
import User from "@/models/User";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                firstname: {label: "Firstname", type: "text"},
                lastname: {label: "Lastname", type: "text"},
                password: {label: "Password", type: "password"},
            },

            async authorize(credentials) {
                await connect();

                if (!credentials) {
                    throw new Error("Данные не найдены");
                }

                try {
                    const user = await User.findOne({firstname: credentials.firstname, lastname: credentials.lastname});

                    if (user) {
                        if (credentials.password === user.password) {
                            return user;
                        }
                        else {
                            throw new Error("Пароль неверный");
                        }
                    }
                } catch (error) {
                    throw new Error(error);
                }
            }

        })
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({token, user}) {
            return token;
        },
        async session({session, token, user}) {
            await connect();

            const userDB = await User.findOne({_id: token.sub});
            session.user = userDB;

            return session;
        },
    },
});

export {handler as GET, handler as POST}