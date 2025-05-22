import { useContext } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import { path } from './constants'
import { AppContext } from './contexts'
import { AdminLayout, EmptyLayout, MainLayout } from './layouts'
import CategoriesPage from './pages/admin-categories'
import CoursePage from './pages/admin-courses'
import CourseDetail from './pages/course-detail'
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
                    index: true,
                    element: <Navigate to={path.admin_categories} replace />
                },
                {
                    path: path.admin_categories,
                    element: (
                        <AdminLayout>
                            <CategoriesPage />
                        </AdminLayout>
                    )
                },
                {
                    path: path.admin_courses,
                    element: (
                        <AdminLayout>
                            <CoursePage />
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
