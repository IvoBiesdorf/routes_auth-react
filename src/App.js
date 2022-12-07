import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css'
import './styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home }     from './pages/Home/index';
import { Users }    from './pages/Users';
import { Menu }     from './pages/Menu';
import { Redirect } from './pages/Redirect';
import { NotFound } from './pages/NotFound';
import { Posts }     from './pages/Posts';
import { Post }     from './pages/Post';
import PrivateRoutes from './utils/PrivateRoutes'
import {Login}      from './pages/Login'
import { User } from './pages/User';
// import './App.css';

function App() {
    const [token, setToken] = useState(true);

    if(!token) {
        return <Login setToken={setToken} />
    }
    return (
        <BrowserRouter>
        <Menu />
        <Routes>
            <Route element={<PrivateRoutes auth={token}/>}>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/user" element={<User />}>
                    <Route path=":id" element={<Post />} />
                </Route>
                <Route path="/posts" element={<Posts />} />
                <Route path="/redirect" element={<Redirect />} />
            </Route>
            <Route element={<Login/>} path="/login"/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
    );
}

export default App;
