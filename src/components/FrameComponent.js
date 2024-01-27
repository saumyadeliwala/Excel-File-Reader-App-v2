import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent.css";

const FrameComponent = () => {
  const navigate = useNavigate();

  const onButtonPrimaryClick = useCallback(() => {
    navigate("/upload");
  }, [navigate]);

  return (
    <form className="frame-group">
      <div className="sign-in-parent">
        <h1 className="sign-in1">Sign In</h1>
        <div className="sign-in-to">Sign in to your account</div>
      </div>
      <div className="white-button-google-parent">
        <button className="white-button-google">
          <div className="white1">
            <div className="button1" />
          </div>
          <img className="google-icon-1" alt="" src="/googleicon-1@2x.png" />
          <div className="sign-in-with">Sign in with Google</div>
        </button>
        <div className="white-button-google1">
          <div className="white2">
            <div className="button2" />
          </div>
          <img className="apple-1-icon" alt="" src="/apple-1@2x.png" />
          <input
            className="sign-in-with1"
            placeholder="Sign in with Apple"
            type="text"
          />
        </div>
      </div>
      <div className="card-component">
        <div className="card">
          <div className="card1" />
        </div>
        <div className="email-address-parent">
          <div className="email-address">Email address</div>
          <div className="input-field-parent">
            <div className="input-field">
              <div className="input-field1" />
            </div>
            <input
              className="johndoegmailcom"
              placeholder="johndoe@gmail.com"
              type="text"
            />
          </div>
        </div>
        <div className="password-parent">
          <div className="password">Password</div>
          <div className="email-address-text">
            <div className="input" />
            <input className="input1" placeholder="••••••••|"/>
            <div className="line-separator" />
          </div>
        </div>
        <div className="forgot-password-button">
          <div className="forgot-password">Forgot password?</div>
        </div>
        <button className="button-primary-parent">
          <div className="button-primary">
            <div className="button-primary1" onClick={onButtonPrimaryClick}>
              <b className="sign-in2">Sign In</b>
            </div>
          </div>

        </button>
      </div>
      <div className="dont-have-an-account-registe-wrapper">
        <div className="dont-have-an-container">
          <span className="dont-have-an">{`Don't have an account? `}</span>
          <span className="register-here">Register here</span>
        </div>
      </div>
    </form>
  );
};

export default FrameComponent;
