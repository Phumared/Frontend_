import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="animate__animated animate__bounceInDown navbar bg-light navbar-expand-lg z-index-fixed top-0 blur border-radius-xl shadow position-fixed my-3 py-2 start-0 end-0 mx-4">
        <div className="container-fluid">
          <Link href="/">
            <img
              src="/image/logo pizza.png"
              className="img-fluid"
              alt="Pizza Logo"
              style={{ width: '150px' }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link" aria-current="page">
                  <i className="bi bi-house-door-fill"></i> หน้าแรก
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/service" className="nav-link">
                  <i className="bi bi-chat-right-fill"></i> บริการของเรา
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link">
                  <i className="bi bi-person-fill"></i> เกี่ยวกับเรา
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  <i className="bi bi-envelope-fill"></i> ติดต่อเรา
                </Link>
              </li>
            </ul>
            <div className="d-flex">
              <Link href="/signup" className="nav-item btn btn-outline-success me-2">
                <i className=""></i> Sign Up
              </Link>
              <Link href="/login" className="nav-item btn btn-outline-success">
                <i className=""></i> Log In
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
