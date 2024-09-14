import React, { useState } from 'react';
import axios from 'axios';
import {Route, Routes} from 'react-router-dom'
import Register from './pages/Register';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import Dashboard from './pages/Dashboard';
import Institution from './pages/Institution';
import ViewInstitution from './pages/ViewInstitution';
import CreateInstitution from './pages/CreateInstitution';
import EditInstitution from './pages/EditInstitution';
import Teachers from './pages/Teachers';

const App = () => {
return (
  <Routes>
  <Route exact path="/register" element={<Register/>}/>
  <Route exact path="/login" element={<Login/>}/>
  <Route exact path="/" element={<AdminLogin/>}/>
  <Route exact path="/dashboard" element={<Dashboard/>}/>
  <Route exact path="/institution" element={<Institution/>}/>
  <Route exact path="/viewinstitution" element={<ViewInstitution/>}/>
  <Route exact path="/createinstitution" element={<CreateInstitution/>}/>
  <Route exact path="/editinstitution" element={<EditInstitution/>}/>
  <Route exact path="/teachers" element={<Teachers/>}/>
  <Route exact path="/viewteacher" element={<ViewInstitution/>}/>
  <Route exact path="/createteacher" element={<CreateInstitution/>}/>
  <Route exact path="/editteacher" element={<EditInstitution/>}/>





  </Routes>
)
}

export default App