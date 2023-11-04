import Button from "@mui/joy/Button";
import RevolvrLogo from "../../img/revolvrlogo.svg";
import RevolvrSquare from "../../img/rsquare2.svg";
import "./LoginSplash.css";

export default function LoginSplash() {
  return (
    <div className="loginSplashContainer">
      <div className="revolver-bar-top">
        <div className="revolver-square">
          <img className="revolver-square-logo" src={RevolvrSquare} alt="revolvr square logo" />
        </div>
      </div>
      <div className="login-central-content">
        <div className="revolvr-logo-login">
          <img src={RevolvrLogo} alt="revolvr logo" width="100%" />
        </div>
        <div className="user-button-controls-container">
          <div className="createAccountButtonContainer">
            <button className="createAccountButton" onClick={function () {}}>
              Create account
            </button>
          </div>
          <div className="loginButtonContainer">
            <button className="loginButton" onClick={function () {}}>
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
