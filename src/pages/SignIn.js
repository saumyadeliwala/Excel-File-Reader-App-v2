import FrameComponent from "../components/FrameComponent";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="right-side" />
      <div className="frame-parent">
        <div className="base-wrapper">
          <h1 className="base">BASE</h1>
        </div>
        <div className="vector-parent">
          <img
            className="vector-icon"
            loading="eager"
            alt=""
            src="/vector@2x.png"
          />
          <img
            className="vector-icon1"
            loading="eager"
            alt=""
            src="/vector-1@2x.png"
          />
          <div className="carbonlogo-linkedin">
            <img
              className="vector-icon2"
              loading="eager"
              alt=""
              src="/vector-2.svg"
            />
          </div>
          <div className="carbonlogo-discord">
            <img
              className="vector-icon3"
              loading="eager"
              alt=""
              src="/vector-3.svg"
            />
            <img className="vector-icon4" alt="" src="/vector-4.svg" />
          </div>
        </div>
        <div className="left-side-parent">
          <img className="left-side-icon" alt="" src="/left-side@2x.png" />
          <div className="frame-child" />
          <img
            className="frame-item"
            loading="eager"
            alt=""
            src="/vector-7.svg"
          />
        </div>
      </div>
      <img className="subtract-icon" alt="" />
      <FrameComponent />
    </div>
  );
};

export default SignIn;
