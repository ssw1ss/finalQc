import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { H1, H3, H4, H6, Layout, Section } from "components";
import { Box, Card, Flex, Image, Text } from "@chakra-ui/react";
import { productFilePaths, PRODUCTS_PATH } from "utils/mdxUtils";

const CardItem = (props: any) => (
  <Box
    fontSize="0.875rem"
    sx={{ "&:last-child": { border: "none" } }}
    {...props}
  />
);

const productInfoMap = {
  origin: "Certification",
  texture: "Texture",
  selection: "Selection",
  producer: "Producer",
  appearance: "Appearance",
  size: "Size",
  fidm: "Fat in Dry Matter",
  rennet: "Rennet",
  paste: "Paste",
  holes: "Holes",
  maturation: "Maturation",
  taste: "Taste",
  bestby: "Best By",
  ingredients: "Ingredients",
  allergen: "Allergens",
} as const;

const SinglePost = ({ source, frontMatter }: any) => {
  const { title, image, milk_type, milk_treatment, ...rest } = frontMatter;
  return (
    <Layout>
      <Section>
        <Flex
          width="100%"
          flexDirection={["column", "column", "row"]}
          justifyContent="space-between"
        >
          <Box width={["100%", "100%", "60%"]}>
            <H1>{title}</H1>
            <H4 color="gray">
              {milk_type} Milk, {milk_treatment}
            </H4>
            <Box mt={5}>
              <img
                alt={title}
                src={image}
                style={{ border: "1px solid #eee", width: "400px" }}
              />
            </Box>
            <Box className="mdxContent" mt={5}>
              <MDXRemote {...source} />
            </Box>
          </Box>
          <Box width={["100%", "100%", "35%"]}>
            <Card variant="default" mt={[7, 7, 0]}>
              <CardItem borderBottom="1px solid #eee" py={2} px={4}>
                <Text
                  sx={{
                    color: "#999",
                    fontSize: "0.8rem",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                  fontWeight={600}
                >
                  Product Information
                </Text>
              </CardItem>
              {Object.entries(rest).map(([k, val]: any, i) => {
                let key = productInfoMap[k as keyof typeof productInfoMap];
                const cardItem =
                  k != "type" ? (
                    <CardItem
                      key={i}
                      borderBottom="1px solid #eee"
                      py={2}
                      px={4}
                    >
                      <Text
                        style={{ display: "inline" }}
                        pr={2}
                        fontWeight={600}
                      >
                        {key}:
                      </Text>
                      <Text style={{ display: "inline" }} fontWeight={400}>
                        {val}
                      </Text>
                    </CardItem>
                  ) : null;
                return cardItem;
              })}
            </Card>
          </Box>
        </Flex>
      </Section>
      <Section bg="brand.lightBlue" mt={8} py={7}>
        <Flex
          flexDirection={["column", "column", "row"]}
          justifyContent="space-between"
        >
          <Box width={["100%", "100%", "45%"]} mb={5}>
            <H1 mb={4}>Looking to buy this cheese?</H1>
            <Text>
              Whether you’re a restaurateur, business owner or just want to buy
              this for personal consumption, get in touch with the distributor.
              You can call them for sales, or find shops that carry what you’re
              looking for.
            </Text>
          </Box>
          <Box width={["100%", "100%", "45%"]}>
            <Box>
              <a href="https://www.forevercheese.com/">
                <H4 my={2}>Forever Cheese</H4>
              </a>
              <Flex
                mt={3}
                flexDirection={["column", "row"]}
                justifyContent="space-between"
              >
                <Box width={["100%", "45%"]}>
                  <H6 mb={3}>Address</H6>
                  <Flex fontSize={6} mb={3}>
                    <Box mr={2} color="brand.blue">
                      <FontAwesomeIcon icon="map-marker-alt" />
                    </Box>
                    <Text>12 W 27th St, Floor 14 New York, NY 10001</Text>
                  </Flex>
                  <Flex fontSize={6}>
                    <Box mr={2} color="brand.blue">
                      <FontAwesomeIcon icon="phone" />
                    </Box>
                    <Text>1-718-777-0772</Text>
                  </Flex>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Section>
    </Layout>
  );
};

export default SinglePost;

// export const postQuery = graphql`
//   query productQuery($id: String) {
//     mdx(id: { eq: $id }) {
//       ...ProductFull
//     }
//   }
// `

export const getStaticProps = async ({ params }: any) => {
  const productFilePath = path.join(PRODUCTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(productFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = productFilePaths
    .map((path) => path.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};
