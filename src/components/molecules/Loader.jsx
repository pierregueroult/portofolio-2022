import React, { useEffect, useState } from "react";
import { useAppState } from "../../App/App.StateProvider";

export default function Loader() {
  const [state, dispatch] = useAppState();

  const animationTime = 2000;
  const minTimeLoad = animationTime + 800;
  const [isMinTimeElapsed, setIsMinTimeElapsed] = useState(false);
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    function wait(t) {
      return new Promise((r) => setTimeout(r, t));
    }
    async function appPercents() {
      let delay = animationTime / 100;
      for (let i = 0; i <= 99; i++) {
        setCurrentPercentage(i);
        await wait(delay);
      }
    }

    setTimeout(() => setIsMinTimeElapsed(true), minTimeLoad);
    document.fonts.ready.then(() => setIsFontLoaded(true));
    appPercents();
  }, []);

  useEffect(() => {
    if (isMinTimeElapsed && isFontLoaded) {
      dispatch({ loadingStep: 1 });
      setCurrentPercentage(100);
    }
  }, [isMinTimeElapsed, isFontLoaded]);

  useEffect(() => {
    if (state.loadingStep === 1) {
      setTimeout(() => dispatch({ loadingStep: 2 }), 500);
    }
    if (state.loadingStep === 2) {
      setTimeout(() => dispatch({ loadingStep: 3 }), 200);
    }
  }, [state.loadingStep]);

  return (
    <section className={state.loadingStep === 3 ? "loader is-out" : "loader"}>
      <div className={"loader__container"}>
        <img
          src="/images/portal5.svg"
          alt="intro portal"
          className={"loader__image"}
        />
        <div className="loader__bar-container">
          <div
            className={
              state.loadingStep === 0
                ? "loader__loading-bar"
                : "loader__loading-bar is-out"
            }
          >
            <div></div>
          </div>
          <p>{currentPercentage}%</p>
        </div>
      </div>
    </section>
  );
}
