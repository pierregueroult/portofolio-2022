import { useParallax } from "react-scroll-parallax";
import { useAppState } from "../../App/App.StateProvider";

export default function Landing() {
  const [state] = useAppState();

  const parallax1 = useParallax({
    speed: -25,
  });
  const parallax2 = useParallax({
    speed: -20,
  });

  return (
    <section className="section landing" id="landing">
      <div
        className="landing__titleContainer"
        style={{
          height: `calc(100vh - ${state.navHeight}px`,
        }}
        ref={parallax2.ref}
      >
        <h2 className="landing__title">PIERRE</h2>
        <h2 className="landing__title">GUEROULT</h2>
      </div>
      <img
        alt="morai"
        src="/images/Convor.png"
        className="landing__image"
        ref={parallax1.ref}
      />
      <div className="main-container">
        <div className="sub-container">
          <div className="sky">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div className="comet"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
