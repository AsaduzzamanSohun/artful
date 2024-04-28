import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import AddArts from "../Pages/AddArt/AddArts";
import AllArts from "../Pages/AllArts/AllArts";
import MyArts from "../Pages/MyArts/MyArts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import EditItems from "../layouts/EditItems";
import Details from "../Pages/Details/Details";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://artful-server.vercel.app/crafts')
            },
            {
                path: '/add_arts',
                element: <AddArts></AddArts>
            },
            {
                path: '/all_arts',
                element: <AllArts></AllArts>,
                loader: () => fetch('https://artful-server.vercel.app/crafts')
            },
            {
                path: '/my_arts',
                element: <MyArts></MyArts>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/edit-item/:id',
                element: <EditItems></EditItems>,
                loader: ({params}) => fetch(`https://artful-server.vercel.app/crafts/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://artful-server.vercel.app/crafts/${params.id}`)
            }
        ]
    }
]);

export default router;