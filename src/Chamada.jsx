import React, { useState } from 'react';
import './Chamada.css';

function Chamada() {
  // Simulando as setorizadas cadastradas no banco (virão do GET /setorizadas)
  const [setorizadas, setSetorizadas] = useState([
    { id: 2, data: "2026-06-13", observacao: "Normal" },
    { id: 3, data: "2026-06-27", observacao: "Ensaio Técnico" }
  ]);

  // Estado para guardar qual setorizada o usuário selecionou no topo
  const [setorizadaSelecionada, setSetorizadaSelecionada] = useState(2);

  // Simulando os dados dos alunos (GET /usuarios)
  const [alunos, setAlunos] = useState([
    { id: 1, nome: "Arthur Alves Florindo", instrumento: "VIOLINO", presente: true },
    { id: 2, nome: "Lucas Silva", instrumento: "VIOLONCELO", presente: false },
    { id: 3, nome: "Gabriel Santos", instrumento: "VIOLA", presente: true },
  ]);

  const togglePresenca = (id) => {
    setAlunos(alunos.map(aluno => 
      aluno.id === id ? { ...aluno, presente: !aluno.presente } : aluno
    ));
  };

  const salvarChamada = () => {
    // Montando o payload exatamente como a sua API espera receber
    const payload = alunos.map(aluno => ({
      presente: aluno.presente,
      usuario_id: aluno.id,
      setorizada_id: Number(setorizadaSelecionada) // Vincula ao ID escolhido no select
    }));

    alert("Enviando dados estruturados para a API:\n\n" + JSON.stringify(payload, null, 2));
  };

  return (
    <div className="chamada-container">
      <div className="chamada-header">
        <div>
          <h2>Chamada da Reunião Setorizada</h2>
          <p className="subtitulo">Selecione a data correspondente para aplicar a frequência</p>
        </div>
        
        {/* Campo de Seleção Clássico */}
        <div className="seletor-data">
          <label htmlFor="setorizada-select">Data do Evento:</label>
          <select 
            id="setorizada-select"
            value={setorizadaSelecionada} 
            onChange={(e) => setSetorizadaSelecionada(e.target.value)}
          >
            {setorizadas.map(set => (
              <option key={set.id} value={set.id}>
                {set.data.split('-').reverse().join('/')} - {set.observacao}
              </option>
            ))}
          </select>
        </div>
      </div>

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

      <div className="chamada-footer">
        <button className="btn-salvar" onClick={salvarChamada}>
          Salvar Chamada
        </button>
      </div>
    </div>
  );
}

export default Chamada;