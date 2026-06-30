import api from "../api";

const usuarioService = {

  listar() {
    return api.get("/usuarios");
  },

  buscarPorId(id) {
    return api.get(`/usuarios/${id}`);
  },

  criar(data) {
    return api.post("/usuarios", data);
  },

  atualizar(id, data) {
    return api.put(`/usuarios/${id}`, data);
  },

  remover(id) {
    return api.delete(`/usuarios/${id}`);
  }

};

export default usuarioService;