import styles from "./PerfilProfesional.module.css";

export default function App(props) {
  const perfil = "Estudiante del noveno ciclo de ingeniería informática de la Universidad Ricardo Palma en búsqueda de una primera experiencia laboral a tiempo completo para poner en práctica sus conocimientos de ciencia de datos en el ambiente laboral, con disponibilidad inmediata.";

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <div className={styles.icon}></div>
        <div>PERFIL PROFESIONAL</div>
        <div className={styles.trash}></div>
      </div>
      <div className={styles.body}>{perfil}</div>
    </div>
  );
}
