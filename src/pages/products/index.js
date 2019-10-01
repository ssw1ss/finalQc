import React from "react"
import ReactQueryParams from "react-query-params"
import { graphql } from "gatsby"
import { navigate } from "@reach/router"
// import { Box } from "@rebass/emotion"

import { Layout } from "ui/layouts"
import { Flex, Link, Section } from "ui/base"
import { ProductCard } from "components"

const productsPerPage = 9
const defaultQueryParameters = {
  page: 1,
  milk_type: "",
  milk_treatment: "",
  texture: "",
  selection: "",
  origin: ""
}

class ProductsPage extends ReactQueryParams {
  constructor(props) {
    super(props)
    const allProducts = props.data.allMdx.nodes
    console.log("setting up", allProducts)

    // Get relevant filters, if any, and apply to productsList that will be used for productPages in state
    // const { page, ...filters } = this.queryParams
    // const hasFilters = Object.keys(filters).filter(key => {
    //   return filters[key] !== ""
    // })
    // let products
    // console.log(filters)
    // if (hasFilters.length > 0)
    //   products = this.filterProducts(allProducts, filters)
    // else products = allProducts
    let products = this.filterProducts(allProducts)

    // Create pages for filtered products, or all products if no filters were applied
    const productPages = this.createProductPages(products)
    this.state = {
      allProducts,
      productPages
    }
  }

  createProductPages = products => {
    let productPages = []
    while (products.length) {
      productPages.push(products.splice(0, productsPerPage))
    }
    return productPages
  }

  // needs to be passed filters from constructor or state
  filterProducts = products => {
    const { page, ...filters } = this.queryParams
    // validate query params
    let filteredProducts = Object.keys(filters).reduce((a, v) => {
      const filterName = v
      const filterValue = filters[v]

      if (filterName in defaultQueryParameters && filterValue !== "") {
        // filter is a valid query param and is not default/empty, use it to filter products
        // const productsWithFilter = products.filter(product => {
        //   return product.
        // })
        return [...a, { [v]: filters[v] }]
      }

      return a
    }, [])
    console.table(filteredProducts)
    return products
  }

  render() {
    console.log("initializing render...", this.props.data)
    const products = this.state.productPages
    const currentPage = Math.abs(Number(this.queryParams.page))
    let activeProducts
    if (currentPage && currentPage <= products.length) {
      activeProducts = products[currentPage - 1]
    } else {
      activeProducts = products[0]
      // navigate("/products")
    }
    return (
      <Layout>
        <Section mb={10}>
          <h3 onClick={() => navigate("?page=2")}>asdf</h3>
          <h3 onClick={() => navigate("?page=3")}>asdf</h3>
          <Flex flexWrap="wrap" justifyContent="space-between">
            {activeProducts.map(node => {
              const { id, ...info } = node
              return (
                <ProductCard
                  info={info}
                  key={id}
                  flexBasis={["100%", "47.5%", "30%"]}
                  mb={6}
                />
              )
            })}
          </Flex>
          {/* <Flex justifyContent="space-between">
            <Box>{links.prevLink}</Box>
            <Box>{links.nextLink}</Box>
          </Flex> */}
        </Section>
      </Layout>
    )
  }
  defaultQueryParams = defaultQueryParameters
}

export default ProductsPage

export const productsPageQuery = graphql`
  query productsPageQuery {
    allMdx(filter: { frontmatter: { type: { eq: "product" } } }) {
      nodes {
        ...ProductPreview
      }
    }
  }
`
