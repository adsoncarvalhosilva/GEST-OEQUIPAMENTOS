import React, { useEffect, useState } from "react";
import "./GerenciamentoEquipamentos.css"

function ListaEquipamentos() {
  const [equipamentos, setEquipamentos] = useState([]);

  // Busca os equipamentos no Banco de Dados
 // useEffect(() => {
  //  const fetchEquipamentos = async () => {
    //  try {
     //   const response = await fetch("http://localhost:3001/equipamentos");
      //  const data = await response.json();
      //  setEquipamentos(data);
      //} catch (error) {
      //  console.error("Erro ao buscar equipamentos:", error);
      //}
    //};

    //fetchEquipamentos();
  //}, []);

  return (
    <div className="container">
      <h2 className="page-title">Lista de Equipamentos</h2>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Patrimônio</th>
            <th>Número de Série</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {equipamentos.map((equipamento) => (
            <tr key={equipamento.id}>
              <td>{equipamento.id}</td>
              <td>{equipamento.patrimonio}</td>
              <td>{equipamento.numero_serie}</td>
              <td>{equipamento.nome}</td>
              <td>{equipamento.descricao}</td>
              <td>{equipamento.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListaEquipamentos;
