import "./globals.css";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"

export const metadata = {
    title: "Выборы президента школы",
    description: "",
};

export default function RootLayout({ children }) {
    return (
        <html lang="ru">
            <AuthProvider>
                <body>
                    <Navbar />
                    {children}
                    <Footer />
                </body>
            </AuthProvider>
        </html>
    );
}
