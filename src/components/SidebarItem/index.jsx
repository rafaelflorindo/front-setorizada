import { NavLink } from "react-router-dom";
import styles from "./SidebarItem.module.css";

export default function SidebarItem({
  path,
  label,
  icon: Icon,
}) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        isActive
          ? `${styles.item} ${styles.active}`
          : styles.item
      }
    >
      <Icon size={22} />

      <span>{label}</span>
    </NavLink>
  );
}