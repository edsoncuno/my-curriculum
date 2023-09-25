import styles from "./Aptitudes.module.css";

export default function App() {
  const data = [
    {
      name: "Programas",
      description:
        "Microsoft Office, Visual Studio Code, SQL Server Management Studio, MySQL Workbench, Power BI",
    },
    {
      name: "Autodidacta",
      description:
        "Soy capaz de adquirir conocimientos y habilidades por mí mismo.",
    },
    {
      name: "Diagnóstico y resolución de problemas",
      description:
        "Soy capas de identificar de la causa raíz de un problema y realizar la implementación de una solución para resolverlo.",
    },
  ];

  const list = data.map((item) => (
    <div key={"id_" + item.name} className={styles.card}>
      <b>{item.name}</b> : {item.description}
    </div>
  ));

  const list2 = data.map((item) => (
    <p key={"id_" + item.name} className={styles.card}>
      <b>{item.name}</b> : {item.description}
    </p>
  ));

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <div className={styles.icon}></div>
        <div>APTITUD Y CAPACIDADES</div>
        <div className={styles.trash}></div>
      </div>
      <div className={styles.body}>{list}</div>
    </div>
  );
}
