import "./Footer.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__copyright">
        © 2023 C Genardini, Powered by spoonacular API
      </h4>
      <Link to="/" className="footer__home">
        Home
      </Link>
    </footer>
  );
}

export default Footer;
