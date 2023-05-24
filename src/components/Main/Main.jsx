import React from "react";
import styles from "./Main.module.scss";

function Main(props) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.lead}>
          <h1 className={styles.title}>
            Зарабатывайте больше <br />
            <span>с&nbsp;WELBEX</span>
          </h1>
          <h2 className={styles.subtitle}>
            Развиваем и контролируем продажи за вас
          </h2>
        </div>

        <div className={styles.main_cards}>
          <h3 className={styles.list_title}>
            Вместе с&nbsp;<span>бесплатной консультацией</span> мы&nbsp;дарим:
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.card}>
                <p className={styles.card_title}>Виджеты</p>
                <p className={styles.card_text}>30 готовых решений</p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <p className={styles.card_title}>Dashboard</p>
                <p className={styles.card_text}>с показателями вашего бизнеса</p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <p className={styles.card_title}>Skype аудит</p>
                <p className={styles.card_text}>отдела продаж и CRM системы</p>
              </div>
            </li>
            <li className={styles.item}>
              <div className={styles.card}>
                <p className={styles.card_title}>35 дней</p>
                <p className={styles.card_text}>использования CRM</p>
              </div>
            </li>
          </ul>
          <button className={styles.button}>Получить консультацию</button>
        </div>
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
