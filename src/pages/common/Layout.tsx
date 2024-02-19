import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Loader from "../loaders/Loader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Loader />
      <div className="page">
        <div className="page-main">
          {/* <!--app header--> */}
          <Navbar />
          {/* <!--/app header--> */}

          {/* <!-- App-Content --> */}
          <div
            className="hor-content main-content"
            style={{
              marginBottom: "20px",
            }}
          >
            <div className="container">{children}</div>
          </div>
          {/* <!-- End app-content--> */}

          {/* <!--Footer--> */}
          <Footer />
          {/* <!-- End Footer--> */}
        </div>
      </div>
      {/* <!-- Back to top --> */}
      <a href="#top" id="back-to-top">
        <i className="fe fe-chevron-up"></i>
      </a>
    </>
  );
}
