import { graphql } from "gatsby"

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
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
            presentationWidth
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
      image {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      origin
      milk_type
      milk_treatment
      texture
      selection
      producer
      appearance
      size
      fidm
      rennet
      paste
      holes
      maturation
      taste
      bestby
      ingredients
      allergen
    }
  }
`
