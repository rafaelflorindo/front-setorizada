import api from "@config/api";

export default {

    listar() {

        return api.get("/dashboard");

    }

};