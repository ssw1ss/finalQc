import React, { useState } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faBars,
  faTimes,
  faPhone,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons"
import { ThemeProvider } from "emotion-theming"
import { Box } from "@rebass/emotion"
import Modal from "react-modal"

import Global from "ui/Global"
import theme from "ui/theme"
import { Header, Footer, MobileMenu } from "ui/partials"

// Import FA Icons
library.add(faBars, faPhone, faTimes, faMapMarkerAlt)

const Layout = ({ children }) => {
  const [modalIsActive, setModalIsActive] = useState(false)
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: "description", content: "Sample" },
              { name: "keywords", content: "sample, something" }
            ]}
          >
            <html lang="en" />
            <link
              href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,600,700"
              rel="stylesheet"
            />
          </Helmet>

          <Global />

          <ThemeProvider theme={theme}>
            <div className="site__wrapper">
              <Modal
                className="ReactModal__Content"
                overlayClassName="ReactModal__Overlay"
                isOpen={modalIsActive}
                onRequestClose={() => setModalIsActive(prevState => !prevState)}
              >
                <MobileMenu />
              </Modal>
              <Header modal={{ modalIsActive, setModalIsActive }} />
              <Box>{children}</Box>
              <Footer />
            </div>
          </ThemeProvider>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
