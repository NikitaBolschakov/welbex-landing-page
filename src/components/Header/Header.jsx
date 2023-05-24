import React from 'react';
import styles from './Header.module.scss'

function Header(props) {
    return (
        <div className={styles.header}>
            <div className={styles.logo_wrapper}>
                <div className={styles.logo}></div>
                <caption className={styles.logo_caption}>крупный интегратор CRM в Росcии и ещё 8 странах</caption>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}><a href="foo">Услуги</a></li>
                <li className={styles.item}><a href="foo">Виджеты</a></li>
                <li className={styles.item}><a href="foo">Интеграции</a></li>
                <li className={styles.item}><a href="foo">Кейсы</a></li>
            </ul>
            <div className={styles.contact_wrapper}>
            <a className={styles.number} href="tel:+7 555 555-55-55">
                +7 555 555-55-55
            </a>
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
            </div>
        </div>
    );
}

export default Header;
