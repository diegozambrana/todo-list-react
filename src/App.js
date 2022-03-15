import React from 'react';
import './App.css';
import { ToDoList } from './modules/ToDo';
import { Login } from './modules/Auth/Login';
import { Register } from './modules/Auth/Register';
import { Text } from './components/Text/Text';
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
} from "react-router-dom";
import { RequiredAuth } from './components/Router';
import { Layout, ProtectedPage } from './layout';
import { DetailTodo } from './modules/ToDo/DetailTodo';

function App() {

  return (
    <div className="App container">
      <Routes>
        <Route element={<Layout />} >
          <Route path="/todo" element={<ToDoList />}>
            <Route path=":idTodo" element={DetailTodo} />
          </Route>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="*" element={<h2>404 ERROR!</h2>} />
          <Route path="/protected" element={
            <RequiredAuth>
              <ProtectedPage />
            </RequiredAuth>
           
          } />
        </Route>
      </Routes>
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
