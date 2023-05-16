import React from "react";
import styles from "./Footer.module.scss";

function Footer(props) {
  return (
    <div className={styles.footer}>
      <div className={styles.list_wrapper}>
        <p className={styles.title_about}>О компании</p>
        <nav>
          <ul className={styles.list_about}>
            <li className={styles.item_about}>
              <a className={styles.link} href="foo"></a>Партнерская программа
            </li>
            <li className={styles.item_about}>
              <a className={styles.link} href="foo">
                Вакансии
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.list_wrapper}>
        <p className={styles.title_menu}>Меню</p>
        <nav>
          <ul className={styles.list_menu}>
            <li className={styles.item_menu}>
              <a className={styles.link} href="foo">
                Расчет
                <br />
                стоимости
              </a>
            </li>
            <li className={styles.item_menu}>
              <a className={styles.link} href="foo">
                Благодарность
                <br />
                клиентов
              </a>
            </li>
            <li className={styles.item_menu}>
              <a className={styles.link} href="foo">
                Услуги
              </a>
            </li>
            <li className={styles.item_menu}>
              <a className={styles.link} href="foo">
                Кейсы
              </a>
            </li>
            <li className={styles.item_menu}>
              <a className={styles.link} href="foo">
                Виджеты
              </a>
            </li>
            <li className={styles.item_menu}>
              <a className={styles.link} href="foo">
                Сертификаты
              </a>
            </li>
            <li className={styles.item_menu}>
              <a className={styles.link} href="foo">
                Интеграции
              </a>
            </li>
            <li className={styles.item_menu}>
              <a className={styles.link} href="foo">
                Блог на Youtube
              </a>
            </li>
            <li className={styles.item_menu}>
              <a className={styles.link} href="foo">
                Наши клиенты
              </a>
            </li>
            <li className={styles.item_menu}>
              <a className={styles.link} href="foo">
                Вопрос / Ответ
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.list_wrapper}>
        <p className={styles.title_menu}>Контакты</p>
        <nav>
          <ul className={styles.list_about}>
            <li className={styles.item_number}>
              <a className={styles.link} href="tel:+7 555 555-55-55">
                +7 555 555-55-55
              </a>
            </li>
            <li className={styles.item_about}>
              <ul className={styles.list_networks}>
                <li>
                  <a className={styles.link} href="foo">
                    <div className={styles.telegram}></div>
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="foo">
                    <div className={styles.tel}></div>
                  </a>
                </li>
                <li>
                  <a className={styles.link} href="foo">
                    <div className={styles.wa}></div>
                  </a>
                </li>
              </ul>
            </li>
            <li className={styles.item_about}>
              <a className={styles.link} href="foo">
                Москва, Путевой проезд 3с1, к 902
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.copyright}>
        <p>&copy;WELBEX 2022. Все права защищены.</p>
        <a href="foo">Политика конфиденциальности</a>
      </div>
    </div>
  );
}

export default Footer;
