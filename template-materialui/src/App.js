import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import Tarefas from './pages/tarefa/ListarTarefa'; // Ou sua página principal de tarefas

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Página de Login */}
        <Route path="/login" element={<Login />} />

        {/* Página de Cadastro */}
        <Route path="/registrar" element={<Registrar />} />

        {/* Página principal após login */}
        <Route path="/tarefas" element={<Tarefas />} />
        
        {/* Página padrão para caso de rotas inválidas */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;



