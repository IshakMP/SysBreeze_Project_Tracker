import logo from "./assets/logo.png";

export default function Header() {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          <div className="d-flex">
            <img src={logo} alt="logo" className="mr-2" />
            <div>Services Tracker</div>
          </div>
        </a>
        <div className="ml-auto ">
          {" "}
          <a className="navbar-brand" href="https://www.sysbitech.com/">
            <span> SYS BREEZE || </span>
          </a>
        </div>
      </div>
    </nav>
  );
}
