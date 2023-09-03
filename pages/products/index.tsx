import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Flex } from "@chakra-ui/react";
import { Filters, H1, Section, Layout, ProductCard, Text } from "components";
import { productFilePaths, PRODUCTS_PATH } from "utils/mdxUtils";

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
const PaginationItem = ({ children, isActive, page, ...props }: any) => {
  const router = useRouter();
  return (
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
      onClick={() => {
        const { query } = router;
        query.page = page;
        if (page === 1) delete query.page;
        router.push({
          pathname: router.pathname,
          query,
        });
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

const validFilters = [
  "texture",
  "milk_type",
  "milk_treatment",
  "origin",
  "selection",
];

const ProductsPage = (props: any) => {
  const router = useRouter();
  console.log("router: ", router.query);

  const { page, ...filters } = router.query;
  console.log("filters: ", filters);
  const products = validFilters.reduce((products, currentFilter: any) => {
    if (filters && filters[currentFilter]) {
      const currentFilterValuesAsArray =
        typeof filters[currentFilter] === "string"
          ? [filters[currentFilter]]
          : filters[currentFilter];
      return products.filter((product: any) => {
        return currentFilterValuesAsArray?.includes(
          product.data[currentFilter]
        );
      });
    }
    return products;
  }, props.products);
  console.log(products);
  const productsPerPage = 9;
  const maxPageNum = Math.ceil(products.length / productsPerPage);
  let activePage = 1;
  if (page && !(Number(page) > maxPageNum)) activePage = Number(page);
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
            flexBasis={["100%", "47.5%", "47.5%", "47.5%", "30%"]}
            mb={6}
          />
        );
      })
    ) : (
      <NoProducts>No products found</NoProducts>
    );

  return (
    <Layout>
      <Section mb={10}>
        <Flex justifyContent="space-between" pb={4}>
          <H1>Products</H1>
          <Filters />
        </Flex>
        <HR />
        <Flex flexWrap="wrap" justifyContent="space-between">
          {productsContent}
        </Flex>
        <Box mt={7}>
          <Flex justifyContent="center">
            {Array.from({ length: numPages }).map((_, i) => {
              return (
                <PaginationItem
                  key={i}
                  isActive={i == activePage - 1}
                  page={i + 1}
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
