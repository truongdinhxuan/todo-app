import styles from "./style/styleLayout.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <section className={styles.header}>
            <h1 className="text-4xl text-black">Todos</h1>
            <nav className={styles.navLink}>
                <a href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/management">Management</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
            <FontAwesomeIcon icon={faUserNinja} className={styles.icon} />
        </section>
    )
}
export default Header;