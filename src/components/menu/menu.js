export default function App(props) {
  function download() {
    props.download()
  }
  return (
    <div>
      <button onClick={download} disabled={!(props.downloading===false)}>Descargar</button>
    </div>
  );
}
