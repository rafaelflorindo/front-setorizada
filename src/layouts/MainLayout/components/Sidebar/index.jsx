import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Sidebar.module.css";

export default function Sidebar() {

    const [aberto, setAberto] = useState(false);

    function toggleMenu() {

        setAberto(!aberto);

    }

    return (

        <>

            <button

                className={styles.menuButton}

                onClick={toggleMenu}

            >

                ☰

            </button>

            <aside

                className={`${styles.sidebar} ${aberto ? styles.open : ""}`}

            >

                <div className={styles.logo}>

                    <h2>Setorizada</h2>

                    <button

                        className={styles.close}

                        onClick={toggleMenu}

                    >

                        ✕

                    </button>

                </div>

                <nav>

                    <NavLink

                        to="/dashboard"

                        onClick={() => setAberto(false)}

                    >

                        Dashboard

                    </NavLink>

                    <NavLink

                        to="/usuarios"

                        onClick={() => setAberto(false)}

                    >

                        Usuários

                    </NavLink>

                    <NavLink

                        to="/frequencias"

                        onClick={() => setAberto(false)}

                    >

                        Frequências

                    </NavLink>

                    <NavLink

                        to="/relatorios"

                        onClick={() => setAberto(false)}

                    >

                        Relatórios

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