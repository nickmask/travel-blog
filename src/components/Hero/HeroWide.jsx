import React from 'react'
import Img from 'gatsby-image'

import styles from './heroWide.module.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <Img
      className={styles.heroImage}
      alt={data.name}
      fluid={data.heroImage.fluid}
      maxHeight="375.45px"
    />
    <div className={styles.headLineWrapper}>
      <div className={styles.headLine}>
        eat<span className={styles.stay}>stay</span>leave
      </div>
      <div className={styles.subHeadLine}>
        This is a blog for writing and doing things
      </div>
    </div>
  </div>
)
