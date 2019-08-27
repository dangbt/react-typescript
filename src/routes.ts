import { IRoutes } from './interface/routes.interface'
import { Hello } from './components/Hello'
import { About } from './components/About'
const routes: IRoutes = [
  {
    key: '/',
    exact: true,
    path: '/',
    component: Hello
  },
  {
    key: '/about',
    exact: false,
    path: '/about',
    component: About
  }
]

export default routes
