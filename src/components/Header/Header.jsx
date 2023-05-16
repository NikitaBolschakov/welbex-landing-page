import React from 'react';
import styles from './Header.module.scss'

function Header(props) {
    return (
        <div className={styles.header}>
            <ul className={styles.list}>
                <li className={styles.item}><a href="foo">услуги</a></li>
                <li className={styles.item}><a href="foo">виджеты</a></li>
                <li className={styles.item}><a href="foo">интеграции</a></li>
                <li className={styles.item}><a href="foo">кейсы</a></li>
            </ul>
        </div>
    );
}

export default Header;
