import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    CalendarCheck,
    FileText,
    Menu,
    X
} from "lucide-react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {

    const [aberto, setAberto] = useState(false);

    function toggleMenu() {

        setAberto(!aberto);

    }

    return (

        <>
            <Menu size={28} />
            {/*<button

                className={styles.menuButton}

                onClick={toggleMenu}

            >

                ☰

            </button>*/}

            <aside

                className={`${styles.sidebar} ${aberto ? styles.open : ""}`}

            >

                <div className={styles.logo}>

                    <h2>Setorizada</h2>
                    <X size={28} />
                    {/*<button

                        className={styles.close}

                        onClick={toggleMenu}

                    >

                        ✕

                    </button>*/}

                </div>

                <nav>

                    <NavLink to="/dashboard">

                        <LayoutDashboard size={20} />

                        <span>Dashboard</span>

                    </NavLink>

                    <NavLink to="/usuarios">

                        <Users size={20} />

                        <span>Usuários</span>

                    </NavLink>

                    <NavLink to="/frequencias">

                        <CalendarCheck size={20} />

                        <span>Frequências</span>

                    </NavLink>

                    <NavLink to="/relatorios">

                        <FileText size={20} />

                        <span>Relatórios</span>

                    </NavLink>

                </nav>

            </aside>

            {

                aberto &&

                <div

                    className={styles.overlay}

                    onClick={toggleMenu}

                />

            }

        </>

    );

}