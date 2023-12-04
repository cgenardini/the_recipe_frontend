import "./Header.css";
import Nav from "../Nav/Nav";

function Header({ onClickLogin, onClickSignUp, children }) {
  return (
    <header className="header">
      <div className="header__overlay">
        <Nav onClickLogin={onClickLogin} onClickSignUp={onClickSignUp} />
        {children}
      </div>
    </header>
  );
}

export default Header;
