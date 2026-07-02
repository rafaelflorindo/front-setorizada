import { useState } from "react";

export default function useUsuarioForm(initialState) {

    const [dados, setDados] = useState(initialState);

    const [erros, setErros] = useState({});

    function alterar(e){

        const {

            name,

            value,

            checked,

            type

        } = e.target;

        setDados(prev=>({

            ...prev,

            [name]:

                type==="checkbox"

                ? checked

                : value

        }));

    }

    function validar(){

        const novo={};

        if(!dados.nome){

            novo.nome="Informe o nome.";

        }

        if(!dados.tipo){

            novo.tipo="Informe o tipo.";

        }

        if(!dados.instrumento){

            novo.instrumento="Informe o instrumento.";

        }

        setErros(novo);

        return Object.keys(novo).length===0;

    }

    return{

        dados,

        erros,

        alterar,

        validar,

        setDados

    }

}