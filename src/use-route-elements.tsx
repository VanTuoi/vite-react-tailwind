import { Outlet, useRoutes } from 'react-router-dom'
import { path } from './constants/path'
import { EmptyLayout, MainLayout } from './layouts'
import { HomePage } from './pages/home'
import Login from './pages/login'
import Register from './pages/register'

const useRouteElements = () => {
    const router = useRoutes([
        {
            path: '/',
            element: (
                <div>
                    <Outlet />
                </div>
            ),
            children: [
                {
                    path: path.login,
                    element: (
                        <EmptyLayout>
                            <Login />
                        </EmptyLayout>
                    )
                },
                {
                    path: path.register,
                    element: (
                        <EmptyLayout>
                            <Register />
                        </EmptyLayout>
                    )
                },
                {
                    index: true,
                    element: (
                        <MainLayout>
                            <HomePage />
                        </MainLayout>
                    )
                }
            ]
        }
    ])
    return router
}

export default useRouteElements
