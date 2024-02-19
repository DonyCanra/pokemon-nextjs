import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-md-12 col-sm-12 text-center">
              <p>
              Copyright © 2023 <Link href="/">Pokemon</Link>. Designed by <Link href="/"> DonyCanra </Link> All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
