import React from 'react'
import { Link } from 'gatsby'

import logo from '../../../static/logo-black.png'
import styles from './navigation.module.css'

export default () => (
  <nav role="navigation">
    <div className={styles.navigationWrapper}>
      <div className={styles.logo}>
        <a href="/">
          <img src={logo} alt="eatstayleave logo" />
        </a>
      </div>
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
