import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { path } from './constants'
import { AppContext } from './contexts'
import { EmptyLayout, MainLayout } from './layouts'
import CategoriesPage from './pages/categories'
import CoursePage from './pages/courses'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import NotFound from './pages/not-found'
import Register from './pages/register'

function ProtectedRoute() {
    const { isAuthenticated, profile } = useContext(AppContext)
    return isAuthenticated && profile?.roles.includes('admin') ? <Outlet /> : <Navigate to='/*' />
}

function PublicRoute() {
    const { isAuthenticated, profile } = useContext(AppContext)

    return !isAuthenticated || !profile?.roles.includes('admin') ? <Outlet /> : <Navigate to='/' />
}

const useRouteElements = () => {
    const router = useRoutes([
        {
            path: '/',
            element: <PublicRoute />,
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
                }
            ]
        },
        {
            path: '/',
            element: <ProtectedRoute />,
            children: [
                {
                    path: path.categories,
                    element: (
                        <MainLayout>
                            <CategoriesPage />
                        </MainLayout>
                    )
                },
                {
                    path: path.courses,
                    element: (
                        <MainLayout>
                            <CoursePage />
                        </MainLayout>
                    )
                },
                {
                    index: true,
                    element: (
                        <MainLayout>
                            <Dashboard />
                        </MainLayout>
                    )
                }
            ]
        },
        {
            path: '*',
            element: (
                <EmptyLayout>
                    <NotFound />
                </EmptyLayout>
            )
        }
    ])
    return router
}

export default useRouteElements
