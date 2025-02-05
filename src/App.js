import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListaEquipamentos from "./pages/ListaEquipamentos";
import CadastroEquipamentos from "./pages/GerenciamentoEquipamentos";

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="menu">
          <Link to="/lista" className="menu-link">
            Lista de Equipamentos
          </Link>
          <Link to="/cadastro" className="menu-link">
            Cadastro de Equipamentos
          </Link>
        </nav>

        <Routes>
          <Route path="/lista" element={<ListaEquipamentos />} />
          <Route path="/cadastro" element={<CadastroEquipamentos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
