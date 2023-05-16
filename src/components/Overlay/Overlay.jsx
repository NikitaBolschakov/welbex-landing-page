import React from "react";
import styles from "./Overlay.module.scss";

function Overlay(props) {
  return (
    <div className={styles.overlay}>
      <div className={styles.glass}></div>
      <div className={styles.purple_light}></div>
      <div className={styles.red_light}></div>
      <div className={styles.yellow_light}></div>
      <div className={styles.noise}></div>
      <div className={styles.purple_ball}></div>
      <div className={styles.red_ball}></div>
      <div className={styles.yellow_ball}></div>
    </div>
  );
}

export default Overlay;
