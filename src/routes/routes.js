import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../layout/DashboardLayout"
import Dashboard from "../Pages/Dashboard"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashboardLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            }
        ]
    }
])