import { Route, Routes } from 'react-router-dom'
import { FunkoRoutes } from '../pages/routes'

export const AppRouter = () => {
    return (
        <>
            <Routes>
               <Route path='/funko/*'  element={ <FunkoRoutes></FunkoRoutes>}/>
            </Routes>

        </>
    )
}
