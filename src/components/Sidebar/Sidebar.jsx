import './Sidebar.css'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Setorizada</h2>

      <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/alunos">Alunos</a>
        <a href="/frequencias">Frequências</a>
        <a href="/instrutores">Instrutores</a>
        <a href="/usuarios">Usuários</a>
        <a href="/relatorios">Relatórios</a>
      </nav>
    </aside>
  )
}