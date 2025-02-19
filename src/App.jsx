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
import QuestionBank from './pages/QuestionBank';
import CreateExamination from './pages/CreateExamination';
import Home from './pages/Home';
import Instruction from './pages/Instruction';
import ExamPage from './pages/ExamPage';
import Finish from './pages/Finish';
import Video from './pages/Video';

const App = () => {
return (
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/instruction" element={<Instruction/>}/>
  <Route exact path="/exampage" element={<ExamPage/>}/>
  <Route exact path="/finish" element={<Finish/>}/>
  <Route exact path="/register" element={<Register/>}/>
  <Route exact path="/login" element={<Login/>}/>
  <Route exact path="/admin" element={<AdminLogin/>}/>
  <Route exact path="/dashboard" element={<Dashboard/>}/>
  <Route exact path="/institution" element={<Institution/>}/>
  <Route exact path="/viewinstitution" element={<ViewInstitution/>}/>
  <Route exact path="/createinstitution" element={<CreateInstitution/>}/>
  <Route exact path="/editinstitution" element={<EditInstitution/>}/>
  <Route exact path="/teachers" element={<Teachers/>}/>
  <Route exact path="/viewteacher" element={<ViewInstitution/>}/>
  <Route exact path="/createteacher" element={<CreateInstitution/>}/>
  <Route exact path="/editteacher" element={<EditInstitution/>}/>
  <Route exact path="/questionbank" element={<QuestionBank/>}/>
  <Route exact path="/createexamination" element={<CreateExamination/>}/>
  <Route exact path="/video" element={<Video/>}/>






  </Routes>
)
}

export default App