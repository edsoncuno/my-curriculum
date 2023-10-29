import styles from "./FormacionAcademica.module.css";

export default function App(props) {
  const estudios = [
    {
      nombre: "Ingeniería Informática",
      institucion: "Universidad Ricardo Palma",
      fecha: "Agosto 2015 - Agosto 2022",
      extra: "Estudiante de noveno ciclo",
    },
    {
      nombre: "Ciencia de datos",
      institucion: "SoyHenry Bootcamp",
      fecha: "Mayo 2023 - En curso",
      extra: "",
    },
    {
      nombre: "Microsoft Excel Básico, Intermedio y Avanzado",
      institucion: "Idat",
      fecha: "Marzo 2023 - Junio 2023",
      extra: "",
    },
    {
      nombre: "Microsoft Power BI Básico",
      institucion: "Idat",
      fecha: "Junio 2023 - Agosto 2023",
      extra: "",
    },
  ];

  const list = estudios.map((item) => (
    <Card
      key={"id_" + item.nombre}
      institucion={item.institucion}
      nombre={item.nombre}
      fecha={item.fecha}
      extra={item.extra}
    />
  ));

  return (
    <div className={styles.app}>
      <div className={styles.title}>
        <div className={styles.icon}></div>
        <div>FORMACIÓN ACADÉMICA</div>
        <div className={styles.trash}></div>
      </div>
      <div className={styles.body}>{list}</div>
    </div>
  );
}

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.nombreFecha}>
        <b>{props.institucion}</b>
        <span>{props.fecha}</span>
      </div>
      <div>{props.nombre}</div>
      <div>{props.extra}</div>
    </div>
  );
}
