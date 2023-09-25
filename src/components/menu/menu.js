import { useState } from "react";

import Button from "./../Button";
import Image from "next/image";

export default function App(props) {
  const [scale, setScale] = useState(1.5);

  const [form, setForm] = useState({
    email: "bhepworth@sculpture.com",
    nombres: "Hepworth",
    apellidos: "Cuno",
  });

  const [archivoJSON, setArchivoJSON] = useState(null);
  const [image, setImage] = useState(null);

  function handleChangeScale(e) {
    setScale(e.target.value);
  }

  function download() {
    props.download(scale);
  }

  function exportar() {
    const stateJSON = JSON.stringify(form, null, 2); // Con formato
    // Crear un objeto Blob con la cadena JSON
    const blob = new Blob([stateJSON], { type: "application/json" });
    // Crear un enlace temporal para descargar el archivo
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "mi_estado.json"; // Nombre del archivo
    // Simular un clic en el enlace para iniciar la descarga
    a.click();
    // Limpiar el enlace temporal
    URL.revokeObjectURL(a.href);
  }

  const handleLeerArchivo = () => {
    if (archivoJSON) {
      const lector = new FileReader();

      lector.onload = (event) => {
        try {
          const contenido = JSON.parse(event.target.result);
          setForm(contenido);
        } catch (error) {
          console.error("Error al leer el archivo JSON:", error);
        }
      };

      lector.readAsText(archivoJSON);
    }
  };

  function toDo() {
    console.log("asd");
  }

  return (
    <div>
      <div>
        <div>
          <label>
            Nombres:
            <input
              name="asd"
              value={form.nombres}
              onChange={(e) => {
                setForm({
                  ...form,
                  nombres: e.target.value,
                });
              }}
            />
          </label>
        </div>
        <input
          type="file"
          accept=".json"
          onChange={(e) => setArchivoJSON(e.target.files[0])}
        />
        <button onClick={handleLeerArchivo}>Importar</button>
        <button onClick={exportar}>Exportar</button>
        <Button text={"un texto"} toDo={toDo} />
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        {image && <img src={image} alt=""/>}
      </div>
      <div>
        <input
          name="as1"
          placeholder="Calidad del pdf, por defecto es 1.5"
          value={scale}
          onChange={handleChangeScale}
        />
        <button onClick={download} disabled={!(props.downloading === false)}>
          Descargar
        </button>
      </div>
    </div>
  );
}
