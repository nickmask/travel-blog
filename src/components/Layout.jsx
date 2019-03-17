import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './Container'
import Navigation from './Navigation/Navigation'
import Footer from './Footer/Footer'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navigation />
        {children}
        <Footer />
      </Container>
    )
  }
}

export default Template
