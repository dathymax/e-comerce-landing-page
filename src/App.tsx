import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/home';
import ProductCatalog from './components/pages/product';
import ProductDetail from './components/common/product/Detail';

function App() {
    return (
        <div className={"h-screen"}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path={"/product"} element={<ProductCatalog />} />
                    <Route path={"/product/detail"} element={<ProductDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
