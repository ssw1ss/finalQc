import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const PRODUCTS_PATH = path.join(process.cwd(), "pages/products");

// postFilePaths is the list of all mdx files inside the PRODUCTS_PATH directory
export const productFilePaths = fs
  .readdirSync(PRODUCTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
