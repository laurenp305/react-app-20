import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
// import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <h2>Made with love by Lauren Pineiro©</h2>
      <p>
        <ul>
          <a href="https://github.com/laurenp305">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/laurenamor/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}

export default Footer;