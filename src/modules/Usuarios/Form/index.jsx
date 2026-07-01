import { useParams } from "react-router-dom";

export default function FormUsuario(){

    const { id } = useParams();

    return(

        <div>

            <h1>

                {

                    id

                    ? "Editar Usuário"

                    : "Novo Usuário"

                }

            </h1>

        </div>

    );

}