import React, { useState, useRef } from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Card, Flex } from "@chakra-ui/react";
import { useClickAway } from "react-use";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Filters, H1, Section, Layout, ProductCard, Text } from "components";

import {
  validateQueryParams,
  validatePage,
  validateFilters,
} from "utils/productFilters";
import { productFilePaths, PRODUCTS_PATH } from "utils/mdxUtils";

const FiltersToggle = ({ children }: any) => (
  <Box
    fontSize={5}
    background="#eee"
    borderRadius="3px"
    padding="0.3rem 1.5rem"
    cursor="pointer"
  >
    {children}
  </Box>
);
const HR = (props: any) => <Box h="1px" w="100%" bg="#eee" mb="1rem" />;
const NoProducts = ({ children }: any) => (
  <Box
    w="100%"
    p="4rem 0"
    textAlign="center"
    bg="#f8f8f8"
    borderRadius="10px"
    fontSize="1.5rem"
    fontWeight="600"
  >
    {children}
  </Box>
);
const PaginationItem = ({ children, isActive, ...props }: any) => (
  <Box {...props}>
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="3px"
      border="1px solid"
      borderColor={isActive ? "brand.blue" : "#ddd"}
      color={isActive ? "#fff" : "#575757"}
      bg={isActive ? "brand.blue" : "#fff"}
      fontSize="1.25rem"
      w="2.5rem"
      h="2.5rem"
      m="0 0.35rem"
      sx={{ "&:hover": { background: isActive ? "brand.blue" : "#eee" } }}
    >
      {children}
    </Box>
  </Box>
);

const filterProducts = (products: any, filters: any) => {
  if (filters !== null) {
    const validFilters = validateFilters(filters);
    const filteredProducts = Object.keys(validFilters).reduce((a, c) => {
      if (c) {
        return a.filter((node: any) => {
          return node.frontmatter[c] == validFilters[c];
        });
      } else return a;
    }, products);
    return filteredProducts;
  } else {
    return products;
  }
};

const ProductsPage = (props: any) => {
  const router = useRouter();
  const productsPerPage = 9;
  const products = props.products;
  // maybe validate filters here first instead of inside filterProducts
  const { filters, page } = validateQueryParams("");
  const filteredProducts = filterProducts(products, filters);
  const maxPageNum = Math.ceil(products.length / productsPerPage);
  const validPage = validatePage(page, maxPageNum);
  let activePage = 1;
  if (validPage) activePage = validPage;
  else {
    const stringifiedFilters = filters
      ? `?filters=${JSON.stringify(filters)}`
      : ``;
    router.push(`/products${stringifiedFilters}`);
  }
  const numPages = Math.ceil(products.length / productsPerPage);
  let currentProducts = products.slice(
    (activePage - 1) * productsPerPage,
    activePage * productsPerPage
  );

  let productsContent =
    currentProducts && currentProducts.length > 0 ? (
      currentProducts.map((product: any, i: number) => {
        // const { id, ...info } = node;
        return (
          <ProductCard
            info={product}
            key={i}
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
  useClickAway(filterRef, (e: any) => {
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

export const getServerSideProps = async () => {
  const products = productFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PRODUCTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { products } };
};

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
