import Home from 'views/Home'
import About from 'views/About'
import Contact from 'views/Contact'
import Dashboard from 'views/Dashboard'
import SignIn from 'views/user/SignIn'

const routes = [
    {
        path: "/",
        component: Home,
        access: 'public',
        meta: { showFooter: true }
    },
    {
        path: "/about",
        component: About,
        access: 'public',
        meta: { showFooter: true }
    },
    {
        path: "/contact",
        component: Contact,
        access: 'public',
        meta: { showFooter: true }
    },
    // {
    //     path: "/dashboard/:id",
    //     component: Dashboard,
    //     access: 'protected',
    //     meta: {}
    // },
    // USER
    {
        path: "/signin",
        component: SignIn,
        access: 'public',
        meta: {}
    }
]

export default routes
