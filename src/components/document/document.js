export default function App() {
  const data = {
    nombre: "edson diego cuno tipso",
    domicilio: "AV RIO PERENE MZ E LT 16 URB SOL DE VITARTE SECTOR G ATE VITARTE",
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
      }, {
        nombre: "Microsoft Power BI Básico",
        institucion: "Idat",
        fecha: "Junio 2023 - En curso",
        extra: "",
      }
    ],
    habilidades: ["Node.js (React, Express)", "HTML", "CSS",  "Python (FaztAPI)", "Gnu/Linux (Debian, Ubuntu, Archlinux)"],
    resumen : "Estudiante de Ingeniería informática del noveno ciclo, con conocimiento en desarrollo web (frontend y backend) y análisis de datos."
  }
  
  const style = {
    width: "794px",
    height: "1120px",
    backgroundColor: "white",
    boxShadow: "0px 15px 15px 15px rgba(0, 0, 0, 0.2)",
  };

  return <div id="element-to-print" style={style}>
    
  </div>;
}
