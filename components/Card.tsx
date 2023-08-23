import { Box } from "@chakra-ui/react";

type CardProps = {
  type?: "default" | "flat" | "product";
  [key: string]: any;
};

const cardStyles = {
  default: {
    background: "#fff",
    borderRadius: "7px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.1)",
  },
  flat: {
    borderRadius: "7px",
    padding: "1.25rem 1.5rem 1.15rem 1.5rem",
  },
  product: {
    padding: "0",
    borderRadius: "3px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.05), 0 0 2px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
};

function Card({ type = "default", ...rest }: CardProps) {
  return <Box style={cardStyles[type]} {...rest} />;
}

export default Card;
