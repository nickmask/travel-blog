import React from 'react'

import styles from './container.module.css'

export default ({ children }) => (
  <div classname={styles.container}>{children}</div>
)
