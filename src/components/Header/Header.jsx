import React from 'react'
import Img from 'gatsby-image'

import styles from './header.module.css'

export default ({ data }) =>
  console.log(data) && (
    <header>
      {/* <Img
      className={styles.headerImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
      maxHeight="375.45px"
    /> */}
      <div className={styles.headerLineWrapper}>
        {/* <div className={styles.headerLine}>
        <img src={logo} alt="eatstayleave logo" />
      </div> */}
        <div className={styles.subHeaderLine}>{data.subHeaderText}</div>
      </div>
    </header>
  )
