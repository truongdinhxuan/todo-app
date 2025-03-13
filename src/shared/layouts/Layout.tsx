import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import styles from "../style/styleLayout.module.css"

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <main className={styles.layout}>
                <Sidebar />
                <div className={styles.mainContent}>
                    {children}
                </div>
            <Footer />
            </main>
        </>
    )
}

export default Layout;