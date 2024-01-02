import "./Header.css";
import Nav from "../Nav/Nav";

function Header({ onClickLogin, onClickSignUp, children, handleSignOut }) {
  return (
    <header className="header">
      <div className="header__overlay">
        <Nav
          onClickLogin={onClickLogin}
          onClickSignUp={onClickSignUp}
          handleSignOut={handleSignOut}
        />
        {children}
      </div>
    </header>
  );
}

export default Header;
