import styles from "./page.module.css";

import Document from "../components/document/document";
import Menu from "../components/menu/menu";

export default function Home() {

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Menu />
        </div>
        <div className={styles.right}>
          <Document />
        </div>
      </div>
    </div>
  );
}
