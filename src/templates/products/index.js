// import React from "react"
// import { graphql } from "gatsby"
// import { Box } from "@rebass/emotion"

// import { Layout } from "ui/layouts"
// import { Flex, Link, Section } from "ui/base"
// import { ProductCard } from "components"

// const ProductsPage = ({
//   data,
//   pageContext: { skip, limit, numPages, totalCount }
// }) => {
//   const currentPage = skip / limit + 1
//   const links = {
//     prevLink: (
//       <Link to={`/products/page/${currentPage - 1}`}>Previous Page</Link>
//     ),
//     nextLink: <Link to={`/products/page/${currentPage + 1}`}>Next Page</Link>
//   }
//   if (currentPage == 1) {
//     links.prevLink = <div />
//   }
//   if (currentPage == 2) {
//     links.prevLink = <Link to={`/products`}>Previous Page</Link>
//   }
//   if (currentPage >= numPages) {
//     links.nextLink = <div />
//   }
//   const remainder = 3 - ((totalCount % 9) % 3)
//   console.log(remainder)
//   const remainderDivs =
//     remainder === 0
//       ? null
//       : Array(remainder)
//           .fill()
//           .map(i => <Flex flexBasis={["100%", "47.5%", "30%"]} />)
//   return (
//     <Layout>
//       <Section mb={10}>
//         <Flex flexWrap="wrap" justifyContent="space-between">
//           {data.allMdx.edges.map(({ node }) => {
//             const { id, ...info } = node
//             return (
//               <ProductCard
//                 info={info}
//                 key={id}
//                 flexBasis={["100%", "47.5%", "30%"]}
//                 mb={6}
//               />
//             )
//           })}
//           {remainderDivs}
//         </Flex>
//         <Flex justifyContent="space-between">
//           <Box>{links.prevLink}</Box>
//           <Box>{links.nextLink}</Box>
//         </Flex>
//       </Section>
//     </Layout>
//   )
// }

// export default ProductsPage

// export const productsQuery = graphql`
//   query productsQuery($limit: Int!, $skip: Int!) {
//     allMdx(
//       filter: { frontmatter: { type: { eq: "product" } } }
//       skip: $skip
//       limit: $limit
//     ) {
//       edges {
//         node {
//           ...ProductPreview
//         }
//       }
//     }
//   }
// `
