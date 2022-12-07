import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoutes = (props) => {
    let auth = {'token':props.auth}
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes