import { ParallaxProvider } from "react-scroll-parallax";

function AppParallax({ children }) {
  return (
    <ParallaxProvider scrollContainer={document.querySelector(".page")}>
      {children}
    </ParallaxProvider>
  );
}

export default AppParallax;
