import "./globals.css";
import AuthProvider from "../components/AuthProvider/AuthProvider";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer"

export const metadata = {
    title: "Выборы руководителя парламента школы",
    description: "",
    viewport: {
        content: "initial-scale=0.9"
    }
    
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
