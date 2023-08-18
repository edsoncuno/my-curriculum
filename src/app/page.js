"use client";

import styles from "./page.module.css";

import { useState } from "react";

import Document from "../components/document/document";
import Menu from "../components/menu/menu";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Home() {
  const [downloading, setDownloading] = useState(false);

  function dowloadPdf() {
    let capture;
    if (typeof window !== "undefined") {
      capture = document.getElementById("element-to-print");
    }
    setDownloading(true);
    html2canvas(capture).then((canvas) => {
      const img = canvas.toDataURL("img/png");
      const document = new jsPDF("p", "mm", "a4");
      const componentWidth = document.internal.pageSize.getWidth();
      const componentHeight = document.internal.pageSize.getHeight();
      document.addImage(img, "PNG", 0, 0, componentWidth, componentHeight);
      document.save("curriculum.pdf");
      setDownloading(false);
    });
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Menu download={dowloadPdf} downloading={downloading} />
        </div>
        <div className={styles.right}>
          <div className={styles.a4}>
            <Document />
          </div>
        </div>
      </div>
    </div>
  );
}
