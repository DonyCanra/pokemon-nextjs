import React, { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="page">
        <div className="page-main">
          {/* <!--app header--> */}
          <Navbar />
          {/* <!--/app header--> */}

          {/* <!-- App-Content --> */}
          <div className="hor-content main-content">
            <div className="container">{children}</div>
          </div>
          {/* <!-- End app-content--> */}

          {/* <!--Footer--> */}
          <Footer />
          {/* <!-- End Footer--> */}
        </div>
      </div>
      {/* <!-- Back to top --> */}
		<a href="#top" id="back-to-top"><i className="fe fe-chevron-up"></i></a>
    </>
  );
}
