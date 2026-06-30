import styles from "./Sidebar.module.css";

import Logo from "@components/Logo";
import SidebarItem from "@components/SidebarItem";

import menu from "@config/menu/menu";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />

      <nav className={styles.menu}>
        {menu.map((item) => (
          <SidebarItem
            key={item.path}
            {...item}
          />
        ))}
      </nav>
    </aside>
  );
}