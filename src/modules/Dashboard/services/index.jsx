import api from "@services/api";

async function resumo() {

    return await api.get("/usuarios");

}

export default {

    resumo

};