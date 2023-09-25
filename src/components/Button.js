import styles from "./Button.module.css";

export default function App(props) {
  return (
    <button
      className={styles.btn}
      style={{ width: props.width }}
      onClick={props.toDo}
    >
      {props.text}
    </button>
  );
}
