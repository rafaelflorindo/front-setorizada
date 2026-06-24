import React, { useState } from 'react';
import './Chamada.css';

function Chamada() {
  // Simulando os dados que viriam do seu GET /usuarios e da setorizada ativa
  const [alunos, setAlunos] = useState([
    { id: 1, nome: "Arthur Alves Florindo", instrumento: "VIOLINO", presente: true },
    { id: 2, nome: "Lucas Silva", instrumento: "VIOLONCELO", presente: false },
    { id: 3, nome: "Gabriel Santos", instrumento: "VIOLA", presente: true },
  ]);

  // Função para alternar a presença ao clicar no botão/checkbox
  const togglePresenca = (id) => {
    setAlunos(alunos.map(aluno => 
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ));
  };

  const salvarChamada = () => {
    alert("Enviando dados para a API: " + JSON.stringify(alunos, null, 2));
    // Aqui depois faremos o fetch(POST /presencas)
  };

  return (
    <div className="chamada-container">
      <div className="chamada-header">
        <h2>Chamada da Reunião Setorizada</h2>
        <p className="subtitulo">Data: 23/06/2026 | Comum Congregação</p>
      </div>

      {/* Lista de Alunos */}
      <div className="lista-alunos">
        {alunos.map(aluno => (
          <div key={aluno.id} className={`aluno-card ${aluno.presente ? 'presente' : 'ausente'}`}>
            <div className="aluno-info">
              <span className="aluno-nome">{aluno.nome}</span>
              <span className="aluno-instrumento">{aluno.instrumento}</span>
            </div>
            
            <div className="aluno-acao">
              <button 
                type="button" 
                className={`btn-status ${aluno.presente ? 'btn-presente' : 'btn-ausente'}`}
                onClick={() => togglePresenca(aluno.id)}
              >
                {aluno.presente ? "Presente" : "Falta"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Rodapé de Ações */}
      <div className="chamada-footer">
        <button className="btn-salvar" onClick={salvarChamada}>
          Salvar Chamada
        </button>
      </div>
    </div>
  );
}

export default Chamada;