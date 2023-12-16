import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import Navbar from "../components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Президент школы",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <AuthProvider>
                <body className={inter.className}>
                    <Navbar />
                    {children}
                </body>
            </AuthProvider>
        </html>
    );
}
