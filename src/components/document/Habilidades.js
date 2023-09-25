import styles from "./Habilidades.module.css";

export default function App(props) {
  const data = [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js (React, Express, PM2)",
    "Python (FaztAPI, pandas, numpy, matplotlib, seaborn, scikit\u2011learn)",
    "Gnu/Linux (Debian, Ubuntu, Archlinux)",
    "SQL Server",
    "MySQL",
  ];

  const list = data.map((item) => <li key={"id_" + item}>{item}</li>);

  const list2 = data.map((item) => (
    <div key={"id_" + item} className={styles.item}>
      <span>&#9733;</span>
      <p>{item}</p>
    </div>
  ));

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <div className={styles.icon}></div>
        <div>HABILIDADES</div>
        <div className={styles.trash}></div>
      </div>
      <div className={styles.body}>{list2}</div>
    </div>
  );
}
