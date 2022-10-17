import React from "react";
import { useNavigate } from "react-router-dom";

export default function InnerLink({
  className,
  destination,
  children,
  onClick,
}) {
  const navigate = useNavigate();
  function navigateTo(e) {
    onClick();
    e.preventDefault();
    const el = document.querySelector(`#${destination}`);
    if (el !== undefined && el !== null) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      navigate(destination);
    } else {
      console.log("No Existing Anchor");
    }
  }

  return (
    <a
      href={`#${destination}`}
      onClick={navigateTo}
      className={className}
      style={{ cursor: "pointer" }}
    >
      {children}
    </a>
  );
}
