import React, { useState, useRef } from "react";
import Link from "next/link";
import { navigate } from "@reach/router";
import { Box, Card, Flex } from "@chakra-ui/react";
import { useClickAway } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { H1, Section, Layout, Text } from "components";
import { ProductCard } from "components";

import { Filters } from "../../pageComponents/products/Filters";
import {
  validateQueryParams,
  validatePage,
  validateFilters,
} from "../../pageComponents/products/utils";

const FiltersToggle = styled(Text)`
  font-size: ${({ theme }) => theme.fontSizes[5]};
  background: #eee;
  border-radius: 3px;
  padding: 0.3rem 1.5rem;
  cursor: pointer;
`;
const HR = styled(Box)`
  height: 1px;
  width: 100%;
  background: #eee;
  margin-bottom: 1rem;
`;
const NoProducts = styled(Box)`
  width: 100%;
  padding: 4rem 0;
  text-align: center;
  background: #f8f8f8;
  border-radius: 10px;
  font-size: 1.5rem;
  font-weight: 600;
`;
const PaginationItem = styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  border: 1px solid;
  border-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue : "#ddd"};
  color: ${({ isActive }) => (isActive ? "#fff" : "#575757")};
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue : "#fff"};
  font-size: 1.25rem;
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 0.35rem;
  &:hover {
    background: ${({ isActive, theme }) =>
      isActive ? theme.colors.blue : "#eee"};
  }
`;

const filterProducts = (products, filters) => {
  if (filters !== null) {
    const validFilters = validateFilters(filters);
    const filteredProducts = Object.keys(validFilters).reduce((a, c) => {
      if (c) {
        return a.filter((node) => {
          return node.frontmatter[c] == validFilters[c];
        });
      } else return a;
    }, products);
    return filteredProducts;
  } else {
    return products;
  }
};

const ProductsPage = ({ data, location: { search } }) => {
  const productsPerPage = 9;
  // maybe validate filters here first instead of inside filterProducts
  const { filters, page } = validateQueryParams(search);
  const products = filterProducts(data.allMdx.nodes, filters);
  const maxPageNum = Math.ceil(products.length / productsPerPage);
  const validPage = validatePage(page, maxPageNum);
  let activePage = 1;
  if (validPage) activePage = validPage;
  else {
    const stringifiedFilters = filters
      ? `?filters=${JSON.stringify(filters)}`
      : ``;
    navigate(`/products${stringifiedFilters}`);
  }
  const numPages = Math.ceil(products.length / productsPerPage);
  let currentProducts = products.slice(
    (activePage - 1) * productsPerPage,
    activePage * productsPerPage
  );

  let productsContent =
    currentProducts && currentProducts.length > 0 ? (
      currentProducts.map((node) => {
        const { id, ...info } = node;
        return (
          <ProductCard
            info={info}
            key={id}
            flexBasis={["100%", "47.5%", "30%"]}
            mb={6}
          />
        );
      })
    ) : (
      <NoProducts>No products found</NoProducts>
    );
  const [visible, setVisible] = useState(false);
  const filterRef = useRef(null);
  useClickAway(filterRef, (e) => {
    if (e.target.getAttribute("name") == "filter-toggle") {
      e.stopPropagation();
    } else {
      setVisible(false);
    }
  });

  return (
    <Layout>
      <Section mb={10}>
        <Flex justifyContent="space-between" pb={4}>
          <H1>Products</H1>
          <Box style={{ position: "relative" }}>
            <FiltersToggle
              name="filter-toggle"
              onClick={() => setVisible(!visible)}
            >
              Filters <FontAwesomeIcon size="xs" icon="sort-amount-down" />
            </FiltersToggle>
            {visible && (
              <Card
                ref={filterRef}
                variant="default"
                style={{
                  minWidth: "18rem",
                  zIndex: "100",
                  position: "absolute",
                  right: "0",
                  top: "100%",
                }}
                p={4}
              >
                <Filters
                  filters={filters}
                  mb={5}
                  hideFilters={() => setVisible(false)}
                />
              </Card>
            )}
          </Box>
        </Flex>
        <HR />
        <Flex flexWrap="wrap" justifyContent="space-between">
          {productsContent}
        </Flex>
        <Box mt={7}>
          <Flex justifyContent="center">
            {Array.from({ length: numPages }).map((_, i) => {
              let prefix = "?";
              if (filters !== null) {
                if (
                  Object.entries(filters).length !== 0 &&
                  filters.constructor === Object
                ) {
                  prefix = `?filters=${JSON.stringify(filters)}&`;
                }
              }
              return (
                <PaginationItem
                  key={i}
                  isActive={i == activePage - 1}
                  to={`/products${prefix}page=${i + 1}`}
                >
                  {i + 1}
                </PaginationItem>
              );
            })}
          </Flex>
          <Text textAlign="center" color="#999" pt={3}>
            Showing page {activePage} of {numPages}
          </Text>
        </Box>
      </Section>
    </Layout>
  );
};

export default ProductsPage;

// export const datQuery = graphql`
//   query datQuery {
//     allMdx(
//       sort: { fields: frontmatter___title }
//       filter: { frontmatter: { type: { eq: "product" } } }
//     ) {
//       nodes {
//         ...ProductPreview
//       }
//     }
//   }
// `
