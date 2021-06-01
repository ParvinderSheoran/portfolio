import "./menu.scss";
import { Person, Mail, GitHub } from "@material-ui/icons";
export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="https://github.com/ParvinderSheoran">GitHub</a>
          <GitHub className="icon" />
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Mail className="icon" />
          <span>siddharthsheoran@gmail.com </span>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Person className="icon" />
          <span>+1 519 312 8751</span>
        </li>
      </ul>
    </div>
  );
}
