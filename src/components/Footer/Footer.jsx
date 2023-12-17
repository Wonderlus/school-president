import styles from "./Footer.module.css"

const Footer = () => {
    return ( 
        <footer className={styles.container}>
            <div className={styles.title}>
            © 2023 Выборы президента школы
            </div>
        </footer>
     );
}
 
export default Footer;