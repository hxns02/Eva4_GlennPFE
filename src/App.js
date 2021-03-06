import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Sales from './components/Sales';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import ProductsAdmin from './components/products/ProductsAdmin';
import ProductsAdd from './components/products/ProductsAdd';
import ProductsEdit from './components/products/ProductsEdit';


import ClientsAdd from './components/clients/ClientsAdd';
import ClientsAdmin from './components/clients/ClientsAdmin';
import ClientsEdit from './components/clients/ClientsEdit';




function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sales" element={<Sales />}></Route>
        <Route path="/sidebar" element={<Sidebar />}></Route>
        <Route path="/topbar" element={<Topbar />}></Route>
        <Route path="/products" element={<ProductsAdmin />}></Route>
        <Route path="/products/add" element={<ProductsAdd />}></Route>
        <Route path="/products/edit" element={<ProductsEdit />}></Route> 
        <Route path="/clients/add" element={<ClientsAdd />}></Route>
        <Route path="/clients" element={<ClientsAdmin />}></Route>
        <Route path="/clients/edit" element={<ClientsEdit />}></Route>
      </Routes>

    </div>
  );
}

export default App;