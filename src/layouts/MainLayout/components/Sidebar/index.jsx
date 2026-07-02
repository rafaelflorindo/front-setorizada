import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

export default function Sidebar() {

    return (

        <aside className={styles.sidebar}>

            <h2>

                Setorizada

            </h2>

            <nav>

                <NavLink

                    to="/dashboard"

                >

                    Dashboard

                </NavLink>

                <NavLink

                    to="/usuarios"

                >

                    Usuários

                </NavLink>

                <NavLink

                    to="/frequencias"

                >

                    Frequências

                </NavLink>

                <NavLink

                    to="/relatorios"

                >

                    Relatórios

                </NavLink>

            </nav>

        </aside>

    );

}