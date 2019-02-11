import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <div className={styles.navigationWrapper}>
      <span className={styles.logo}>eatstayleave</span>
      <ul className={styles.navigation}>
        <li className={styles.navigationItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.navigationItem}>
          <Link to="/blog/">Blog</Link>
        </li>
      </ul>
    </div>
  </nav>
)
