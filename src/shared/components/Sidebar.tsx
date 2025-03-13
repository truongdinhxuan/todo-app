import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import styles from "../style/styleLayout.module.css"
import { faPersonCircleQuestion, faQuestion, faUserShield, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Sidebar = () => {
    return (
        // <aside className={styles.sidebar}>
        //     <h1 className="text-2xl font-bold">Menu</h1>
        //     <nav className="text-xl font-medium">
        //     <a href="/todo-management">
        //         <FontAwesomeIcon icon={faPersonCircleQuestion} />
        //         Todo management
        //     </a>
        //     <a href="/question-management">
        //         <FontAwesomeIcon icon={faQuestion} />
        //         Question management
        //     </a>
        //     <a href="/user-management">
        //         <FontAwesomeIcon icon={faUserTie} />
        //         User management
        //     </a>
        //     <a href="/role-management">
        //         <FontAwesomeIcon icon={faUserShield} />
        //         Role management
        //     </a>
        //     </nav>
        // </aside>
        <menu className="bg-white border-t-1 border-r-1 border-[#c2c2c2] hidden md:block  aside ">
            <h1 className="text-2xl font-bold">Menu</h1>
            <nav className="text-xl font-medium">
                <div><Link to="/">
                <FontAwesomeIcon icon={faPersonCircleQuestion} className="mr-3"/>
                Todo management
                </Link></div>

                <div><Link to="/question-management">
                <FontAwesomeIcon icon={faQuestion} className="mr-3"/>
                Question management
                </Link></div>

                <div><Link to="/user-management">
                <FontAwesomeIcon icon={faUserTie} className="mr-3"/>
                User management
                </Link></div>

                <div><Link to="/role-management">
                <FontAwesomeIcon icon={faUserShield} className="mr-3"/>
                Role management
                </Link></div>
            </nav>
        </menu>
    )
}

export default Sidebar;