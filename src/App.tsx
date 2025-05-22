import { useContext, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { AppContext } from './contexts/app.context'
import useRouteElements from './use-route-elements'
import { LocalStorageEventTarget } from './utils/auth'

const App = () => {
    const routeElements = useRouteElements()
    const { resetProfile } = useContext(AppContext)

    useEffect(() => {
        LocalStorageEventTarget.addEventListener('clearLS', resetProfile)
        return () => {
            LocalStorageEventTarget.removeEventListener('clearLS', resetProfile)
        }
    }, [resetProfile])

    return (
        <div>
            {routeElements}
            <Toaster position='bottom-right' />
        </div>
    )
}

export default App
