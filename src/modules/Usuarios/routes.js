import Lista from "./pages/Lista";
import Form from "./pages/Form";

const usuarioRoutes = [
    {
        path: "/usuarios",
        element: <Lista />
    },
    {
        path: "/usuarios/novo",
        element: <Form />
    },
    {
        path: "/usuarios/:id",
        element: <Form />
    }
];

export default usuarioRoutes;