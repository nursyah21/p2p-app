import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Scan } from "./pages/Scan";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/scan',
        Component: Scan
    } 
])