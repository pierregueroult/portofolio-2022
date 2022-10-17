import React from "react";

export default function OuterLink({ className, children, url }) {
  return (
    <a href={url} className={className}>
      {children}
    </a>
  );
}

export function OuterLinkBlank({ className, children, url }) {
  return (
    <a href={url} className={className} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}
