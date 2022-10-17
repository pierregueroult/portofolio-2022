import React from "react";
import AppParallax from "../../App/App.Parallax";
import { useAppState } from "../../App/App.StateProvider";
import navigationAnchor from "../../data/routes";

export default function Page() {
  const [state] = useAppState();

  return (
    <AppParallax>
      <div
        className="page page__sectionContainer"
        style={{
          height: `calc(100vh - ${state.navHeight}px`,
          top: `${state.navHeight}px`,
        }}
      >
        {navigationAnchor.map(({ Component }, index) => (
          <Component key={index} />
        ))}
      </div>
    </AppParallax>
  );
}
