import { Outlet } from 'react-router-dom'
import Sidebar from '@components/Sidebar/Sidebar'
import Header from '@components/Header/Header'

import './MainLayout.css'

export default function MainLayout() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Header />

        <main className="page">
          <Outlet />
        </main>
      </div>
    </div>
  )
}