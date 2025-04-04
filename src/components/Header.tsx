import HamburgerMenuIcon from "../assets/hamburger-menu-icon.png";

export const Header = () => {
  return (
    <>
      <header>
        <div className="hero-image">
          <nav>
            <img src={HamburgerMenuIcon} alt="burger-icon" width="30px"></img>
            <ul>
              <li>
                <a href="/">Start</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <h1>Julia Paulin</h1>
        </div>
      </header>
    </>
  );
};
