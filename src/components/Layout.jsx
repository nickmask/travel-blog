import React from 'react'
import get from 'lodash/get'
import { StaticQuery, graphql } from 'gatsby'

import base from './base.css'
import Container from './Container'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'

class Layout extends React.Component {
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
        <StaticQuery
          query={graphql`
            query HeadingQuery {
              allContentfulHeader(
                filter: { contentful_id: { eq: "709jmMnCweFralbN6pbHXn" } }
              ) {
                edges {
                  node {
                    headerImage: headerImages {
                      fluid(
                        maxWidth: 1180
                        maxHeight: 480
                        resizingBehavior: SCALE
                      ) {
                        ...GatsbyContentfulFluid_tracedSVG
                      }
                    }
                    subHeaderText
                  }
                }
              }
            }
          `}
          render={data => (
            <Header data={data.allContentfulHeader.edges[0].node} />
          )}
        />
        <div className="leftSidebar" />
        <main>{children}</main>
        <div className="rightSidebar" />
        <Footer />
      </Container>
    )
  }
}

export default Layout

// export const query = graphql`
//   query HeaderQuery {
//     allContentfulHeader(
//       filter: { contentful_id: { eq: "709jmMnCweFralbN6pbHXn" } }
//     ) {
//       edges {
//         node {
//           subHeaderText
//         }
//       }
//     }
//   }
// `
