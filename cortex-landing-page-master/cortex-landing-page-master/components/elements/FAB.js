import React from "react";

const FAB = ({ to, className, children }) => {
  return (
    <a href={to} target="_blank" className={className}>
      {children}
    </a>
  );
};

export default FAB;
