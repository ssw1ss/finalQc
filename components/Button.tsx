import Link from "next/link";

const Button = ({
  children,
  className = "",
  to,
}: {
  children: any;
  className?: string;
  to: string;
}) => {
  return (
    <Link href={to}>
      <button
        className={
          "bg-blue-500 rounded-3xl text-white text-lg px-6 py-2" + className
        }
      >
        {children}
      </button>
    </Link>
  );
};

Button.defaultProps = {
  as: Link,
  bg: "blue",
  borderRadius: "25px",
  color: "white",
  fontSize: 4,
  px: 5,
  py: 2,
};

export default Button;
