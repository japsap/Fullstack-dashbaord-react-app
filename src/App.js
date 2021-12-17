import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AllInOne from './components/login/AllInOne';
import ErrorPage from './components/Error/ErrorPage';

export default class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Routes>
                        <Route exact path='/' element={<Home/>}/>
                        <Route exact path='/login' element={<AllInOne/>}/>
                        <Route exact path='*' element={<ErrorPage/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
