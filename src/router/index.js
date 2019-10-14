import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Dashboard from '../views/Dashboard'

const routes = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about",
        exact: true,
        component: About
    },
    {
        path: "/contact",
        exact: true,
        component: Contact
    },
    {
        path: "/dashboard",
        exact: true,
        component: Dashboard
    }
]

export default routes
