import React from "react";
import styles from "./Main.module.scss";

function Main(props) {
  return (
    <>
      <div className={styles.main}>
        <h1 className={styles.title}>
          Зарабатывайте больше <br />
          <span>с&nbsp;WELBEX</span>
        </h1>
        <h2 className={styles.subtitle}>
          Развиваем и контролируем продажи за вас
        </h2>
        <h3 className={styles.list_title}>
          Вместе с&nbsp;<span>бесплатной консультацией</span> мы&nbsp;дарим:
        </h3>
        <ul className={styles.list}>
          <li className={styles.item}><span className={styles.item_text}>Skype аудит</span></li>
          <li className={styles.item}><span className={styles.item_text}>30 виджетов</span></li>
          <li className={styles.item}><span className={styles.item_text}>Dashboard</span></li>
          <li className={styles.item}><span className={styles.item_text}>Месяц аmoCRM</span></li>
        </ul>
      </div>
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
    </>
  );
}

export default Main;
