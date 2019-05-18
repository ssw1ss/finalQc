import React from 'react'
import { Global as GlobalEl, css } from '@emotion/core'

const globalStyles = css`
* {
  box-sizing: border-box;
}
html {
  font-family: "Work Sans", -apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  color: #575757;
  font-size: 16px;
  line-height: 1.5;
}
html, body {
  min-height: 100vh;
}
body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  margin: 0;
  padding: 0;
}
h1, h2, h3, h4, h5, h6 {
  line-height: 1.2;
}
ol, ul, p {
  margin: 0;
  padding: 0;
}
ol, ul {
  list-style: none;
}
img {
  max-width: 100%;
  height: auto;
}


.site__wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.gatsby-image-wrapper div {
  padding: 0;
}
`

const Global = () => (
  <GlobalEl styles={globalStyles} />
)


export default Global