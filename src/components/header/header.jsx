import { Link } from "react-router";


export function Header() {
  return (
    <>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src="/assets/img/argentBankLogo.webp"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link to="/signin" className="main-nav-item">
            <i className="fa fa-user-circle" />
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
}
