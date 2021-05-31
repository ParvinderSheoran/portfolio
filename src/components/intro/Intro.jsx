import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  const textref = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "from Lambton College,Sarnia.",
        "in Computer Software and Database Developement",
      ],
    });
  }, []);

  useEffect(() => {
    init(textref.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "HTML",
        "CSS,SCSS",
        "REACT",
        "javaScript",
        "jQuery",
        "Bootstarp",
        "GIT",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Parvinder Sheoran</h1>
          <h3>
            Accredited <span ref={textRef}></span>
          </h3>
          <h3>
            Skills: <span ref={textref}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
