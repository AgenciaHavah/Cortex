import React from "react";
import Component from "next/link";

const Link = ({ href, title, className, ...rest }) => (
  <Component href={href} scroll={false} {...rest}>
    <a className={className}>{title}</a>
  </Component>
);

export default Link;
