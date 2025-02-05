import React, { useState } from "react";
import "./GerenciamentoEquipamentos.css";

function GerenciamentoEquipamentos() {
  const [formData, setFormData] = useState({
    patrimonio: "",
    numero_serie: "",
    nome: "",
    descricao: "",
    status: "disponível",
  });

  // Atualiza os valores do formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submissão do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Equipamento cadastrado:", formData);
    setFormData({
      patrimonio: "",
      numero_serie: "",
      nome: "",
      descricao: "",
      status: "disponível",
    });
  };

  return (
    <div className="container">
      {/* Menu Superior */}
      <nav className="menu">
        <ul>
          <li>
            <a href="/lista-equipamentos">Lista de Equipamentos</a>
          </li>
          <li>
            <a href="/cadastro-equipamentos" className="active">
              Cadastro de Equipamentos
            </a>
          </li>
        </ul>
      </nav>

      <h2 className="page-title">Cadastro de Equipamentos</h2>

      {/* Adicionar equipamento */}
      <form className="form-equipamentos" onSubmit={handleSubmit}>
        <div className="form-group">
        <label htmlFor="patrimonio">Patrimônio:</label>
       <input
        type="text"
        id="patrimonio"
        className="form-control"
        placeholder="Digite o patrimônio"
        />
        </div>

        <div className="form-group">
          <label htmlFor="numero_serie">Número de Série:</label>
          <input
            type="text"
            id="numero_serie"
            name="numero_serie"
            value={formData.numero_serie}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite o número de série"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nome">Nome do Equipamento:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite o nome do equipamento"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            className="form-control"
            placeholder="Digite a descrição"
            rows="3"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="form-control"
          >
            <option value="disponível">Disponível</option>
            <option value="indisponível">Indisponível</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Adicionar Equipamento
        </button>
      </form>
    </div>
  );
}

export default GerenciamentoEquipamentos;
