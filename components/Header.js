import Link from 'next/link';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
      <div className="container-fluid">
        <Link href="/" passHref legacyBehavior>
          <a className="navbar-brand">My Portfolio</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/about" passHref legacyBehavior>
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" passHref legacyBehavior>
                <a className="nav-link">Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" passHref legacyBehavior>
                <a className="nav-link">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
