import {
  HiHome,
  HiUsers,
  HiCalendarDays,
  HiUserGroup,
  HiUserCircle,
  HiChartBar,
  HiCog6Tooth,
} from "react-icons/hi2";

const menu = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: HiHome,
  },
  {
    label: "Alunos",
    path: "/alunos",
    icon: HiUsers,
  },
  {
    label: "Frequências",
    path: "/frequencias",
    icon: HiCalendarDays,
  },
  {
    label: "Instrutores",
    path: "/instrutores",
    icon: HiUserGroup,
  },
  {
    label: "Usuários",
    path: "/usuarios",
    icon: HiUserCircle,
  },
  {
    label: "Relatórios",
    path: "/relatorios",
    icon: HiChartBar,
  },
  {
    label: "Configurações",
    path: "/configuracoes",
    icon: HiCog6Tooth,
  },
];

export default menu;