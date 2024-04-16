import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__nav">
        <ul className="header__nav-dev">{"<" + "DevMitri" + ">"}</ul>
        <ul className="header__nav-list">
          <li className="header__nav-item">Home</li>
          <li className="header__nav-item">About</li>
          <li className="header__nav-item">Projects</li>
          <li className="header__nav-item">Contact</li>
        </ul>
      </div>
    </header>
  );
};

export { Header };
