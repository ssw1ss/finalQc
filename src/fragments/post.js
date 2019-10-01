import { graphql } from "gatsby"

export const postPreviewFragment = graphql`
  fragment PostPreview on Mdx {
    id
    excerpt(pruneLength: 10)
    fields {
      url
    }
    frontmatter {
      title
      date
      image {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
    }
  }
`

export const postFullFragment = graphql`
  fragment PostFull on Mdx {
    body
    frontmatter {
      title
      date
      image {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
    }
  }
`
