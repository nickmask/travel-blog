import React from 'react'
import Img from 'gatsby-image'

import styles from './header.module.css'

import logo from '../../../static/logo-white.png'

export default ({ data }) => (
  <header>
    <Img
      className={styles.headerImage}
      alt={data.name}
      fluid={data.headerImage[1].fluid}
      maxHeight="375.45px"
    />
    <div className={styles.headerLineWrapper}>
      <div className={styles.headerLine}>
        {/* <Img
          // className={styles.headerLogoImage}
          alt={data.name}
          fluid={data.headerLogoImage.fluid}
        /> */}
        <img src={logo} alt="eatstayleave logo" />
      </div>
      <div className={styles.subHeaderLine}>{data.subHeaderText}</div>
    </div>
  </header>
)
