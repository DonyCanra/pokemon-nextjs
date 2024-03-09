import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="hor-header header top-header" style={{
      background: "orange",
      borderBottom: "2px solid black",
    }}>
      <div className="container">
        <div className="d-flex">
          <Link href="/" className="animated-arrow hor-toggle horizontal-navtoggle">
            <span></span>
          </Link>
          <Link className="header-brand" href="/">
            <Image src="/images/brand/logo.png" className="header-brand-img desktop-lgo" alt="Pokemon logo" width={100} height={50} />
            <Image src="/images/brand/logo.png" className="header-brand-img dark-logo" alt="Pokemon logo" width={100} height={50} />
            <Image src="/images/brand/logo.png" className="header-brand-img mobile-logo" alt="Pokemon logo" width={100} height={50} />
            <Image src="/images/brand/logo.png" className="header-brand-img darkmobile-logo" alt="Pokemon logo" width={100} height={50} />
          </Link>
          {/* <div className="mt-1 d-md-block d-none">
            <form className="form-inline">
              <div className="search-element">
                <input type="search" className="form-control header-search mobile-view-search" placeholder="Search pokemon" aria-label="Search" tab-index="1" />
                <button className="btn btn-primary-color" type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" className="header-icon search-icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                  </svg>
                </button>
              </div>
            </form>
          </div> */}
          {/* <!-- SEARCH --> */}
          <div className="d-flex order-lg-2 ms-auto main-header-end">
            <button
              className="navbar-toggler navresponsive-toggler d-md-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent-4"
              aria-controls="navbarSupportedContent-4"
              aria-expanded="true"
              aria-label="Toggle navigation"
            >
              <i className="fe fe-more-vertical header-icons navbar-toggler-icon"></i>
            </button>
            <div className="navbar navbar-expand-lg navbar-collapse responsive-navbar p-0">
              <div className="collapse navbar-collapse" id="navbarSupportedContent-4">
                <div className="d-flex order-lg-2">
                  <div className="dropdown d-lg-none d-flex responsive-search">
                    <Link href="/" className="nav-link icon" data-bs-toggle="dropdown">
                      <svg xmlns="http://www.w3.org/2000/svg" className="header-icon search-icon" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                      </svg>
                    </Link>
                    <div className="dropdown-menu header-search dropdown-menu-start">
                      <div className="input-group w-100 p-2">
                        <input type="text" className="form-control" placeholder="Search...." />
                        <button className="btn btn-primary-color" type="submit">
                          <svg xmlns="http://www.w3.org/2000/svg" className="header-icon search-icon p-1 mt-1" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <div className="dropdown profile-dropdown d-flex">
                    <a href="/" className="nav-link pe-0 leading-none" data-bs-toggle="dropdown">
                      <span className="header-avatar1">
                        <Image src="/images/users/2.jpg" alt="img" className="avatar avatar-md brround" width={100} height={50} />
                      </span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow animated">
                      <div className="text-center">
                        <div className="text-center user pb-0 font-weight-bold">Dony Canra</div>
                        <span className="text-center user-semi-title">Web Designer</span>
                        <div className="dropdown-divider"></div>
                      </div>
                      <Link className="dropdown-item d-flex" href="/">
                        <svg className="header-icon me-2" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24">
                          <g>
                            <rect fill="none" height="24" width="24" />
                          </g>
                          <g>
                            <path d="M11,7L9.6,8.4l2.6,2.6H2v2h10.2l-2.6,2.6L11,17l5-5L11,7z M20,19h-8v2h8c1.1,0,2-0.9,2-2V5c0-1.1-0.9-2-2-2h-8v2h8V19z" />
                          </g>
                        </svg>
                        <div className="fs-13">Sign Out</div>
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
