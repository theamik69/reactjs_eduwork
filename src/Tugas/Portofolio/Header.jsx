import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <header id="header" className="text-white mt-5">
      <div className="container">
        <h1>
          <a href="index.html" className="text-white">
            Ahmad Mishbah
          </a>
        </h1>
        <h2>
          I am a passionate <span>web developer</span> from Bandung
        </h2>

        <nav className="navbar navbar-expand-lg navbar-dark">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#header">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
