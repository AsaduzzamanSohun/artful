import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";
import AddArts from "../Pages/AddArt/AddArts";
import AllArts from "../Pages/AllArts/AllArts";
import MyArts from "../Pages/MyArts/MyArts";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'add_arts',
                element: <AddArts></AddArts>
            },
            {
                path: 'all_arts',
                element: <AllArts></AllArts>
            },
            {
                path: 'my_arts',
                element: <MyArts></MyArts>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
]);

export default router;