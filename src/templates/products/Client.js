// import React from "react"
// import gql from "graphql-tag"
// import Link from "gatsby-link"
// import Img from "gatsby-image"

// const testQuery = gql`
//   {
//     allMdx(
//       filter: { frontmatter: { type: { eq: "product" } } }
//       limit: 1
//       skip: 2
//     ) {
//       edges {
//         node {
//           frontmatter {
//             title
//           }
//         }
//       }
//     }
//   }
// `

// class Client extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   updateProducts = async () => {
//     const client = this.props.client
//     console.log(client)
//     try {
//       const { data } = await client.query({
//         query: testQuery
//       })
//       console.log(data)
//     } catch (errs) {
//       console.log("error with client component", errs)
//     }
//   }
//   render() {
//     const { data } = this.props
//     return (
//       <div style={{ background: "#ddd" }} onClick={this.updateProducts}>
//         {data.allMdx.edges.map(({ node }) => {
//           const { frontmatter, fields, excerpt } = node
//           return (
//             <div key={node.id}>
//               <Img fixed={frontmatter.image.childImageSharp.fixed} />
//               <h3>
//                 <Link to={fields.url}>{frontmatter.title}</Link>
//               </h3>
//               <h5>
//                 {frontmatter.milk_type}, {frontmatter.milk_treatment}
//               </h5>
//               <p>{excerpt}</p>
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }

// export default Client
