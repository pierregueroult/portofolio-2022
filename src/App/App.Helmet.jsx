import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const AppHelmet = ({ children }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Bienvenue - Pierre Guéroult</title>
        <script
          src="https://kit.fontawesome.com/edd275dcd1.js"
          crossorigin="anonymous"
        ></script>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};

export default AppHelmet;
