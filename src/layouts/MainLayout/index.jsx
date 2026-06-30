import { Outlet } from "react-router-dom";

import Header from "@components/Header";
import Sidebar from "@components/Sidebar";

import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <div className={styles.content}>
        <Header />

        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}