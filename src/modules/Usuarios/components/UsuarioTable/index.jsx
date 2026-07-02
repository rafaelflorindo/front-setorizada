import Badge from "@components/Badge";

import {

    Pencil,

    Trash2,

    Eye

} from "lucide-react";

import styles from "./UsuarioTable.module.css";

export default function UsuarioTable({

    usuarios,

    onEditar,

    onExcluir

}) {
function badgeTipo(tipo){

    switch(tipo){

        case "ALUNO":

            return "aluno";

        case "INSTRUTOR":

            return "instrutor";

        case "ENCARREGADO LOCAL":

            return "local";

        default:

            return "regional";

    }

}

function badgeStatus(status){

    return status ? "ativo" : "inativo";

}
    return (

        <table className={styles.table}>

            <thead>

                <tr>

                    <th>Nome</th>

                    <th>Tipo</th>

                    <th>Instrumento</th>

                    <th>Telefone</th>

                    <th>Status</th>

                    <th width="180">Ações</th>

                </tr>

            </thead>

            <tbody>

                {

                    usuarios.map(usuario => (

                        <tr key={usuario.id}>

                            <td>{usuario.nome}</td>

                            <td>

    <Badge tipo={badgeTipo(usuario.tipo)}>

        {usuario.tipo}

    </Badge>

</td>

                            <td>{usuario.instrumento}</td>

                            <td>{usuario.telefone}</td>

                           <td>

    <Badge tipo={badgeStatus(usuario.status)}>

        {usuario.status ? "Ativo" : "Inativo"}

    </Badge>

</td>

                            <td>

                                <div className={styles.acoes}>

    <button

        className={styles.editar}

        onClick={() => onEditar(usuario.id)}

        title="Editar"

    >

        <Pencil size={18} />

    </button>

    <button

        className={styles.visualizar}

        title="Visualizar"

    >

        <Eye size={18} />

    </button>

    <button

        className={styles.excluir}

        onClick={() => onExcluir(usuario.id)}

        title="Excluir"

    >

        <Trash2 size={18} />

    </button>

</div>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}