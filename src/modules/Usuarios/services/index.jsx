import api from "@services/api";

async function listar() {

    return await api.get("/usuarios");

}

async function buscarPorId(id) {

    return await api.get(`/usuarios/${id}`);

}

async function criar(dados) {

    return await api.post("/usuarios", dados);

}

async function atualizar(id, dados) {

    return await api.put(`/usuarios/${id}`, dados);

}

async function excluir(id) {

    return await api.delete(`/usuarios/${id}`);

}

export default {

    listar,

    buscarPorId,

    criar,

    atualizar,

    excluir

};