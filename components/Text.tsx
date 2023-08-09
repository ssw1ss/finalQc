import React from "react";

const Dropcap = (props: any) => (
  <span
    className="text-gray-200 w-10 h-10 flex bg-yellow rounded-sm items-center justify-center float-left mt-1 mr-2 text-2xl font-bold"
    {...props}
  />
);

const Text = ({ children, dropcap, ...props }: any) => {
  let content;
  if (dropcap) {
    content = (
      <>
        <Dropcap>{children.slice(0, 1)}</Dropcap>
        {children.slice(1)}
      </>
    );
  } else {
    content = children;
  }
  return (
    <div className="text-gray text-base" {...props}>
      {content}
    </div>
  );
};

export default Text;
