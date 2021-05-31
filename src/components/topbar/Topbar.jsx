import "./topbar.scss";
import { Person, Mail, GitHub } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            For u!
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+1 519 312 8751</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>siddharthsheoran@gmail.com</span>
          </div>
          <div className="itemContainer">
            <a href="https://github.com/ParvinderSheoran">
              <GitHub className="icon" />
              <span>ParvinderSheoran</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
