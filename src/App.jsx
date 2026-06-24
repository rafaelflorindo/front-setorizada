import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Sistema de Controle de Cordas</h1>
        <p>Painel Administrativo</p>
      </header>

      <main className="main-content">
        <section className="card">
          <h2>Próximas Setorizadas</h2>
          <p>Área destinada à listagem e chamada de presenças.</p>
        </section>

        <section className="card">
          <h2>Evolução Pedagógica</h2>
          <p>Área destinada ao registro de passagens de lições e hinos.</p>
        </section>
      </main>
    </div>
  );
}

export default App;