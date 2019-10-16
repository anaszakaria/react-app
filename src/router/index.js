import Home from 'views/Home'
import About from 'views/About'
import Contact from 'views/Contact'
import Dashboard from 'views/Dashboard'

const routes = [
    {
        path: "/",
        component: Home,
        meta: { showFooter: true }
    },
    {
        path: "/about",
        component: About,
        meta: { showFooter: true }
    },
    {
        path: "/contact",
        component: Contact,
        meta: { showFooter: true }
    },
    {
        path: "/dashboard/:id",
        component: Dashboard,
        meta: {}
    }
]

export default routes
