import React, { useRef, useState } from "react";
import InnerLink from "../atoms/InnerLink";
import navigationAnchor from "../../data/routes";
import OuterLink from "../atoms/OuterLink";
import { useAppState } from "../../App/App.StateProvider";
import { useEffect } from "react";

export default function NavBar() {
  const [, dispatch] = useAppState();
  const [menu, setMenu] = useState(false);
  const header = useRef(null);

  useEffect(() => {
    dispatch({ navHeight: header.current.clientHeight });
  }, []);

  return (
    <header className="navbar" ref={header}>
      <div className="navbar__menu" onClick={() => setMenu((prev) => !prev)}>
        <i className={`fa-solid ${menu ? "fa-xmark" : "fa-bars"}`}></i>
      </div>
      <div className={`navbar__linkContainer ${menu ? "menu-is-active" : ""}`}>
        {navigationAnchor.map(({ title, anchor }, index) => (
          <InnerLink
            children={title}
            destination={anchor}
            className={"navbar__link"}
            key={index}
            onClick={() => setMenu((prev) => !prev)}
          />
        ))}
      </div>
      <div className="navbar__socialContainer">
        <OuterLink url="https://www.instagram.com/pierre.gueroult">
          <i className="fa-brands fa-instagram"></i>
        </OuterLink>
        <OuterLink url="https://github.com/pierregueroult">
          <i className="fa-brands fa-github"></i>
        </OuterLink>
      </div>
    </header>
  );
}
