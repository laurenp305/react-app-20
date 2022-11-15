import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>My Portfolio</strong> - a React site by{" "}
          <a href="https://github.com/laurenp305" target="_blank" rel="noreferrer">
            Lauren Pineiro
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/laurenamor/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>{" "}
          |{" "}{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;