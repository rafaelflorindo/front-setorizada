import styles from "./UsuarioTable.module.css";

export default function UsuarioTable({

    usuarios,

    onEditar,

    onExcluir

}) {

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

                            <td>{usuario.tipo}</td>

                            <td>{usuario.instrumento}</td>

                            <td>{usuario.telefone}</td>

                            <td>

                                {

                                    usuario.status

                                        ? "Ativo"

                                        : "Inativo"

                                }

                            </td>

                            <td>

                                <button
                                    onClick={() => onEditar(usuario.id)}
                                >
                                    Editar
                                </button>

                                <button
                                    onClick={() => onExcluir(usuario.id)}
                                >
                                    Excluir
                                </button>

                            </td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}