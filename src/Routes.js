import React from 'react'
import { BrowserRouter as Router, Routes as AllRoutes, Route,Navigate } from 'react-router-dom';
import Auth from './pages/Auth';
import PatientDetail from './pages/PatientDetail';
import Home from './pages/Home';


const Routes = () => {
  return (
    <Router>
        <AllRoutes>
          <Route path='/login' element={<Auth/>} />
          <Route path='/data' element={<Home />} />
          <Route path='/data/:id' element={<PatientDetail/>}/>
          <Route path='/' exact element={<Navigate to='/login'/>}/>
        </AllRoutes>
  </Router>
  )
}

export default Routes