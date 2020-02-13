import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer footer-default">
      <div className="container d-flex">
        <div className="bebride-assessoria">
          <a
            className="text-decoration-none"
            href="http://bebrideassessoria.com.br"
            target="blank"
          >
            <strong>BeBride</strong> Assessoria
          </a>
        </div>
        <div className="copyright">
          ©{new Date().getFullYear()} made with{" "}
          <i className="text-primary fa fa-heart" /> by
          <a
            className="text-decoration-none"
            href="http://bebrideassessoria.com.br"
            target="blank"
          >
            <strong> MDuque</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}
