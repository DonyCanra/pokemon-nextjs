import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <head>
          {/* Meta data */}
          <meta charSet="UTF-8" />
          <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0' />
          <meta content="Azea - Admin Panel HTML template" name="description" />
          <meta content="Spruko Private Limited" name="author" />
          <meta name="keywords" content="admin, admin template, dashboard, admin dashboard, responsive, bootstrap, bootstrap 5, admin theme, admin themes, bootstrap admin template, scss, ui, crm, modern, flat" />

          {/* Title */}
          <title>Pokemon</title>

          {/* Favicon */}
          {/* <link rel="icon" href="/images/brand/favicon.ico" type="image/x-icon" /> */}

          {/* Bootstrap css */}
          <link href="/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

          {/* Style css */}
          <link href="/css/style.css" rel="stylesheet" />
          <link href="/css/dark.css" rel="stylesheet" />
          <link href="/css/skin-modes.css" rel="stylesheet" />

          {/* Animate css */}
          <link href="/css/animated.css" rel="stylesheet" />

          {/* P-scroll bar css */}
          <link href="/plugins/p-scrollbar/p-scrollbar.css" rel="stylesheet" />

          {/* Icons css */}
          <link href="/css/icons.css" rel="stylesheet" />

          {/* Simplebar css */}
          <link rel="stylesheet" href="/plugins/simplebar/css/simplebar.css" />

          {/* INTERNAL Morris Charts css */}
          <link href="/plugins/morris/morris.css" rel="stylesheet" />

          {/* INTERNAL Select2 css */}
          <link href="/plugins/select2/select2.min.css" rel="stylesheet" />

          {/* Data table css */}
          <link href="/plugins/datatables/DataTables/css/dataTables.bootstrap4.min.css" rel="stylesheet" />
          <link href="/plugins/datatables/Responsive/css/responsive.bootstrap4.min.css" rel="stylesheet" />

          {/* Color Skin css */}
          <link id="theme" href="/colors/color1.css" rel="stylesheet" type="text/css" />

          {/* INTERNAL Switcher css */}
          <link href="/switcher/css/switcher.css" rel="stylesheet" />
          <link href="/switcher/demo.css" rel="stylesheet" />
        </head>
        <body className="app">
          <Main />
          <NextScript />

          {/* Jquery js */}
          <script src="/js/jquery.min.js"></script>

          {/* Bootstrap5 js */}
          <script src="/plugins/bootstrap/popper.min.js"></script>
          <script src="/plugins/bootstrap/js/bootstrap.min.js"></script>

          {/* Othercharts js */}
          <script src="/plugins/othercharts/jquery.sparkline.min.js"></script>

          {/* Circle-progress js */}
          <script src="/js/circle-progress.min.js"></script>

          {/* Jquery-rating js */}
          <script src="/plugins/rating/jquery.rating-stars.js"></script>

          {/* Horizontal-menu js */}
          <script src="/plugins/horizontal-menu/horizontal-menu.js"></script>

          {/* Sticky js */}
          <script src="/js/stiky.js"></script>

          {/* P-scroll js */}
          {/* <script src="/plugins/p-scrollbar/p-scrollbar.js"></script> */}
          {/* <script src="/plugins/p-scrollbar/p-scroll.js"></script> */}

          {/* INTERNAL Flot Charts js */}
          <script src="/plugins/flot/jquery.flot.js"></script>
          <script src="/plugins/flot/jquery.flot.fillbetween.js"></script>
          <script src="/plugins/flot/jquery.flot.pie.js"></script>
          <script src="/js/dashboard.sampledata.js"></script>
          <script src="/js/chart.flot.sampledata.js"></script>

          {/* INTERNAL Chart js */}
          <script src="/plugins/chart/chart.bundle.js"></script>
          <script src="/plugins/chart/utils.js"></script>

          {/* INTERNAL Apexchart js */}
          <script src="/js/apexcharts.js"></script>

          {/* INTERNAL Moment js */}
          <script src="/plugins/moment/moment.js"></script>

          {/* INTERNAL Index js */}
          <script src="/js/index1.js"></script>

          {/* INTERNAL Data tables */}
          <script src="/plugins/datatables/DataTables/js/jquery.dataTables.js"></script>
          <script src="/plugins/datatables/DataTables/js/dataTables.bootstrap5.js"></script>
          <script src="/plugins/datatables/Responsive/js/dataTables.responsive.min.js"></script>
          <script src="/plugins/datatables/Responsive/js/responsive.bootstrap5.min.js"></script>

          {/* INTERNAL Select2 js */}
          <script src="/plugins/select2/select2.full.min.js"></script>
          <script src="/js/select2.js"></script>

          {/* Simplebar JS */}
          <script src="/plugins/simplebar/js/simplebar.min.js"></script>

          {/* Rounded bar chart js */}
          <script src="/js/rounded-barchart.js"></script>

          {/* Custom js */}
          <script src="/js/custom.js"></script>

          {/* Switcher js */}
          <script src="/switcher/js/switcher.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
