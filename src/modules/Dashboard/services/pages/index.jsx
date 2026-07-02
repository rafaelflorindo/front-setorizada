import { useEffect, useState } from "react";

import dashboardService from "../services";

import CardResumo from "../components/CardResumo";

import styles from "./Dashboard.module.css";

export default function Dashboard() {

    const [dados, setDados] = useState({

        total: 0,

        alunos: 0,

        instrutores: 0,

        encarregados: 0,

        ensaio: 0

    });

    useEffect(() => {

        carregar();

    }, []);

    async function carregar() {

        try {

            const response = await dashboardService.resumo();

            const usuarios = response.data.usuarios;

            setDados({

                total: usuarios.length,

                alunos: usuarios.filter(u => u.tipo === "ALUNO").length,

                instrutores: usuarios.filter(u => u.tipo === "INSTRUTOR").length,

                encarregados:

                    usuarios.filter(u =>

                        u.tipo === "ENCARREGADO LOCAL" ||

                        u.tipo === "ENCARREGADO REGIONAL"

                    ).length,

                ensaio:

                    usuarios.filter(u =>

                        u.liberadoEnsaio

                    ).length

            });

        }

        catch (error) {

            console.log(error);

        }

    }

    return (

        <div className={styles.container}>

            <h1>Dashboard</h1>

            <div className={styles.cards}>

                <CardResumo

                    titulo="Usuários"

                    valor={dados.total}

                />

                <CardResumo

                    titulo="Alunos"

                    valor={dados.alunos}

                />

                <CardResumo

                    titulo="Instrutores"

                    valor={dados.instrutores}

                />

                <CardResumo

                    titulo="Encarregados"

                    valor={dados.encarregados}

                />

                <CardResumo

                    titulo="Liberados para Ensaio"

                    valor={dados.ensaio}

                />

            </div>

        </div>

    );

}