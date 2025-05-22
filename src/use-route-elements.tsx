import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { path } from './constants'
import { AppContext } from './contexts'
import { AdminLayout, EmptyLayout, MainLayout } from './layouts'
import CategoriesPage from './pages/categories'
import CourseDetail from './pages/course-detail'
import CoursePage from './pages/courses'
import Dashboard from './pages/dashboard'
import HomePage from './pages/home'
import Login from './pages/login'
import NotFound from './pages/not-found'
import Register from './pages/register'

function ProtectedRoute() {
    const { isAuthenticated, profile } = useContext(AppContext)
    return isAuthenticated && profile?.roles.includes('admin') ? <Outlet /> : <Navigate to='/' />
}

function PublicRoute() {
    const { isAuthenticated, profile } = useContext(AppContext)

    return !isAuthenticated || !profile?.roles.includes('admin') ? <Outlet /> : <Navigate to='/' />
}

const useRouteElements = () => {
    const router = useRoutes([
        {
            path: '/',
            element: (
                <MainLayout>
                    <Outlet />
                </MainLayout>
            ),
            children: [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: path.coursesDetails,
                    element: <CourseDetail />
                }
            ]
        },

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
            path: '/admin',
            element: <ProtectedRoute />,
            children: [
                {
                    path: 'categories',
                    element: (
                        <AdminLayout>
                            <CategoriesPage />
                        </AdminLayout>
                    )
                },
                {
                    path: 'courses',
                    element: (
                        <AdminLayout>
                            <CoursePage />
                        </AdminLayout>
                    )
                },
                {
                    index: true,
                    element: (
                        <AdminLayout>
                            <Dashboard />
                        </AdminLayout>
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
