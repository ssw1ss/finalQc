import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// import Layout from "../components/layout"
import SEO from "../components/seo"

const HomePage = ({ data }) => {
  const posts = data.allMdx.edges
  console.log(posts)
  return (
    <>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div>
        {posts.map(({ node }) => {
          const { id, frontmatter, excerpt, fields } = node
          return (
            <div key={id}>
              <Img fixed={frontmatter.image.childImageSharp.fixed} />
              <h3>
                <a href={fields.url}>{frontmatter.title}</a>
              </h3>
              <h5>{frontmatter.date}</h5>
              <p>{excerpt}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export const HomePageQuery = graphql`
  query homePageQuery {
    allMdx(filter: { frontmatter: { type: { eq: "post" } } }) {
      edges {
        node {
          ...PostPreview
        }
      }
    }
  }
`

export default HomePage
