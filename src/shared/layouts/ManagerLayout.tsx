import { ReactNode } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const ManagerLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Header />
            <main>
                <Sidebar />
                {children}
            </main>
            <Footer />
        </>
    )
}

export default ManagerLayout;