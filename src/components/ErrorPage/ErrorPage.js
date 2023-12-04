import "./ErrorPage.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ErrorPage({ error }) {
  return (
    <div className="error-page">
      <h1 className="error-page__title">Oops!</h1>
      <h2 className="error-page__error-name">
        {error.code} {error.name}
      </h2>
      <p className="error-page__error-message">{error.message}</p>
      <Link to="/">
        <button type="button" className="error-page__link">
          Home
        </button>
      </Link>
    </div>
  );
}

export default ErrorPage;
