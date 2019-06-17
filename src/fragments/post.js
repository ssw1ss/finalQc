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
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

export const postFullFragment = graphql`
  fragment PostFull on Mdx {
    code {
      body
    }
    frontmatter {
      title
      date
      image {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

export const productPreviewFragment = graphql`
  fragment ProductPreview on Mdx {
    id
    fields {
      url
    }
    frontmatter {
      title
      milk_type
      image {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`

export const productFullFragment = graphql`
  fragment ProductFull on Mdx {
    code {
      body
    }
    frontmatter {
      type
      title
      milk_type
      milk_treatment
      image {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      another
      test
    }
  }
`
