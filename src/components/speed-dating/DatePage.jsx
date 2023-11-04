import WebcamCapture from "../core-functionality/WebcamCapture";
import RevolvrSquare from "../../img/rsquare2.svg";
import './DatePage.css';

export default function DatePage() {
  return (
    <div className="datePageContainer">
      <div className="revolver-bar-top navbar-control">
        <div className="revolver-square">
          <img
            className="revolver-square-logo"
            src={RevolvrSquare}
            alt="revolvr square logo"
          />
        </div>
      </div>
      <div>
        <WebcamCapture />
      </div>
    </div>
  );
}
