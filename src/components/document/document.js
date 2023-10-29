import styles from "./document.module.css";

import Aptitudes from "./Aptitudes";
import FormacionAcademica from "./FormacionAcademica";
import PerfilProfesional from "./PerfilProfesional";
import Habilidades from "./Habilidades";
import Portafolio from "./Portafolio";

export default function App() {
  const data = {
    nombres: "edson diego",
    apellidos: "cuno tipso",
    avenida: "AV RIO PERENE 771",
    distrito: "ATE",
    ciudad: "LIMA",
    pais: "PERÚ",
    domicilio:
      "AV RIO PERENE MZ E LT 16 URB SOL DE VITARTE SECTOR G ATE VITARTE",
    correo: "edsoncuno3@gmail.com",
    telefono: "970555161",
    dni: "73205427",
    estudios: [
      {
        nombre: "Ingeniería Informática",
        institucion: "Universidad Ricardo Palma",
        fecha: "Agosto 2015 - Aplazado",
        extra: "Estudiante de noveno ciclo",
      },
      {
        nombre: "Ciencia de datos",
        institucion: "Henry",
        fecha: "Mayo 2023 - En curso",
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
        fecha: "Junio 2023 - En curso",
        extra: "",
      },
    ],
    habilidades: [
      "Node.js (React, Express)",
      "HTML",
      "CSS",
      "Python (FaztAPI)",
      "Gnu/Linux (Debian, Ubuntu, Archlinux)",
    ],
    resumen:
      "Egresado de Ingeniería Informática del noveno ciclo, con conocimiento en análisis de datos y desarrollo web (frontend y backend).",
  };

  const style = {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  };

  return (
    <div id="element-to-print" className={styles.document}>
      <div className={styles.left}>
        <div className={styles.photo}></div>
        <div className={styles.name}>
          <div>{data.nombres.toUpperCase()}</div>
          <div>{data.apellidos.toUpperCase()}</div>
        </div>
        <div className={styles.contacto}>
          <div className={styles.title}>
            <div className={styles.icon}></div>
            <div>CONTACTO</div>
            <div className={styles.trash}></div>
          </div>
          <div className={styles.direccion}>
            <div className={styles.icon}></div>
            <div>
              {data.avenida}, {data.distrito}
            </div>
            <div className={styles.trash}></div>
          </div>
          <div className={styles.correo}>
            <div className={styles.icon}></div>
            <div>{data.correo}</div>
            <div className={styles.trash}></div>
          </div>
          <div className={styles.telefono}>
            <div className={styles.icon}></div>
            <div>{data.telefono}</div>
            <div className={styles.trash}></div>
          </div>
          <div className={styles.dni}>
            <div className={styles.icon}></div>
            <div>{data.dni}</div>
            <div className={styles.trash}></div>
          </div>
        </div>
        <div className={styles.resumen}>
          <div className={styles.title}>
            <div className={styles.icon}></div>
            <div>RESUMEN</div>
            <div className={styles.trash}></div>
          </div>
          <div className={styles.texto}>{data.resumen}</div>
        </div>
      </div>
      <div className={styles.right}>
        <PerfilProfesional />
        <Portafolio />
        <FormacionAcademica />
        <Aptitudes />
        <Habilidades />
      </div>
    </div>
  );
}
