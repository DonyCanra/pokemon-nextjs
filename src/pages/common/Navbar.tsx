import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div
      className="hor-header header top-header"
      style={{
        background: "orange",
        borderBottom: "2px solid black",
      }}
    >
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
