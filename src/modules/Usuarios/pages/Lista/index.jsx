import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//import usuarioService from "@services/usuarios";
import usuarioService from "../../services";
//import UsuarioCard from "../../components/UsuarioCard";
import Filtro from "../../components/Filtro";
import UsuarioTable from "../../components/UsuarioTable";
import styles from "./Lista.module.css";

export default function ListaUsuarios() {

    const navigate = useNavigate();

    const [usuarios, setUsuarios] = useState([]);

    const [loading, setLoading] = useState(true);
    const [filtro, setFiltro] = useState({

        busca: "",

        tipo: "",

        instrumento: ""

    });
    useEffect(() => {

        carregarUsuarios();

    }, []);

    function alterarFiltro(e) {

        const {

            name,

            value

        } = e.target;

        setFiltro({

            ...filtro,

            [name]: value

        });

    }
    async function carregarUsuarios() {

        try {

            const response = await usuarioService.listar();

            setUsuarios(response.data.usuarios);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function excluir(id) {

        if (!window.confirm("Deseja excluir este usuário?")) return;

        try {

            await usuarioService.excluir(id);

            carregarUsuarios();

        } catch (error) {

            console.error(error);

        }

    }

    if (loading) {

        return <h2>Carregando...</h2>;

    }
    const usuariosFiltrados = usuarios.filter(usuario => {

        const nome = usuario.nome
            .toLowerCase()
            .includes(filtro.busca.toLowerCase());

        const tipo = filtro.tipo === ""
            || usuario.tipo === filtro.tipo;

        const instrumento = filtro.instrumento === ""

            || usuario.instrumento === filtro.instrumento;

        return nome && tipo && instrumento;

    });
    return (

        <div className={styles.container}>

            <div className={styles.header}>

                <h1>Usuários</h1>

                <button
                    onClick={() => navigate("/usuarios/novo")}
                >
                    Novo Usuário
                </button>

            </div>
            <Filtro

                filtro={filtro}

                alterar={alterarFiltro}

            />
            <div className={styles.lista}>

    <UsuarioTable

        usuarios={usuariosFiltrados}

        onEditar={(id) => navigate(`/usuarios/${id}`)}

        onVisualizar={(id)=>navigate(`/usuarios/visualizar/${id}`)}

        onExcluir={excluir}

    />

</div>

        </div>

    );

}
