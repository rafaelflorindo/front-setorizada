import React from 'react';
import './App.css';
import Chamada from './Chamada';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Sistema de Controle de Cordas</h1>
        <p>Painel Administrativo</p>
      </header>

      <main className="main-content">
        {/* Renderiza o componente de chamada aqui dentro */}
        <Chamada />
      </main>
    </div>
  );
}

export default App;