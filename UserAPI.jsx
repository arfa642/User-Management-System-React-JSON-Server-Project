import React from 'react';
import UserData from './UserData';
import AddUser from './AddUser';
import { Routes, Route, NavLink } from 'react-router-dom';
import './API_INTEGRATION.css';
import EditUser from './EditUser';
import Backend from './Backend';

const UserAPI = () => {

  return (
    <div>
      <div style={{ backgroundColor: '#f2f2f2', padding: '15px' }} >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '500px' }} >
          <NavLink to="/"
            className={({ isActive }) => (isActive ? 'activeSection' : '')}
            style={{ textDecoration: 'none', fontWeight: '500', fontSize: '30px' }}>
            Home</NavLink>
          <NavLink to="/add"
            className={({ isActive }) => (isActive ? 'activeSection' : '')}
            style={{ textDecoration: 'none', fontWeight: '500',  fontSize: '30px', fontSize: '30px' }} >
            Add User</NavLink>
          <NavLink to="/backend"
            className={({ isActive }) => (isActive ? 'activeSection' : '')}
            style={{ textDecoration: 'none', fontWeight: '500',  fontSize: '30px', fontSize: '30px' }} >
            Backend</NavLink>
        </div>
      </div>


      <Routes>
        <Route path='/' element={<UserData />} />
        <Route path='/add' element={<AddUser />} />
        <Route path='/backend' element={<Backend />} />
        <Route path='/edit/:id' element={<EditUser />} />
      </Routes>
    </div>
  );
};

export default UserAPI;
