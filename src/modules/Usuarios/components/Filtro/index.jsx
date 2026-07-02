import Input from "@components/Input";
import Select from "@components/Select";

import instrumentos from "@constants/instrumentos";
import tiposUsuario from "@constants/tiposUsuario";

import styles from "./Filtro.module.css";

export default function Filtro({

    filtro,

    alterar

}){

    return(

        <div className={styles.container}>

            <Input

                label="Buscar"

                name="busca"

                placeholder="Digite o nome..."

                value={filtro.busca}

                onChange={alterar}

            />

            <Select

                label="Tipo"

                name="tipo"

                value={filtro.tipo}

                onChange={alterar}

                options={[

                    {

                        value:"",

                        label:"Todos"

                    },

                    ...tiposUsuario

                ]}

            />

            <Select

                label="Instrumento"

                name="instrumento"

                value={filtro.instrumento}

                onChange={alterar}

                options={[

                    {

                        value:"",

                        label:"Todos"

                    },

                    ...instrumentos

                ]}

            />

        </div>

    );

}