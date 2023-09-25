import styles from "./Portafolio.module.css";

export default function App(props) {
  const data = "https://edsoncuno.github.io/my-portafolio/";
  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <div className={styles.icon}></div>
        <div>PORTAFOLIO DE PROYECTOS</div>
        <div className={styles.trash}></div>
      </div>
      <div className={styles.body}>
        <a href={data} target="_blank">{data}</a>
      </div>
    </div>
  );
}
