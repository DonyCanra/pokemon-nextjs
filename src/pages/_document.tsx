import Document, { Html, Head, Main, NextScript } from "next/document";
import Meta from "./components/MetaComponent";
import LinkComponent from "./components/LinkComponent";
import ScriptComponent from "./components/ScriptComponent";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Import Meta component */}
          <Meta />

          {/* Favicon */}
          <link rel="icon" href="/images/brand/logo.png" type="image/x-icon" />

          {/* Bootstrap css */}
          <LinkComponent href="/plugins/bootstrap/css/bootstrap.min.css" />

          {/* Style css */}
          <LinkComponent href="/css/style.css" />
          <LinkComponent href="/css/dark.css" />
          <LinkComponent href="/css/skin-modes.css" />

          {/* Animate css */}
          <LinkComponent href="/css/animated.css" />

          {/* P-scroll bar css */}
          <LinkComponent href="/plugins/p-scrollbar/p-scrollbar.css" />

          {/* Icons css */}
          <LinkComponent href="/css/icons.css" />

          {/* Simplebar css */}
          <LinkComponent href="/plugins/simplebar/css/simplebar.css" />

          {/* INTERNAL Morris Charts css */}
          <LinkComponent href="/plugins/morris/morris.css" />

          {/* INTERNAL Select2 css */}
          <LinkComponent href="/plugins/select2/select2.min.css" />

          {/* Data table css */}
          <LinkComponent href="/plugins/datatables/DataTables/css/dataTables.bootstrap4.min.css" />
          <LinkComponent href="/plugins/datatables/Responsive/css/responsive.bootstrap4.min.css" />

          {/* Color Skin css */}
          <LinkComponent href="/colors/color1.css" />

          {/* INTERNAL Switcher css */}
          <LinkComponent href="/switcher/css/switcher.css" />
          <LinkComponent href="/switcher/demo.css" />
        </Head>
        <body className="app">
          <Main />
          <NextScript />

          {/* Your script tags */}
          {/* Jquery js */}
          <ScriptComponent src="/js/jquery.min.js" />

          {/* Bootstrap5 js */}
          <ScriptComponent src="/plugins/bootstrap/popper.min.js" />
          <ScriptComponent src="/plugins/bootstrap/js/bootstrap.min.js" />

          {/* Othercharts js */}
          <ScriptComponent src="/plugins/othercharts/jquery.sparkline.min.js" />

          {/* Circle-progress js */}
          <ScriptComponent src="/js/circle-progress.min.js" />

          {/* Jquery-rating js */}
          <ScriptComponent src="/plugins/rating/jquery.rating-stars.js" />

          {/* Horizontal-menu js */}
          <ScriptComponent src="/plugins/horizontal-menu/horizontal-menu.js" />

          {/* Sticky js */}
          {/* <ScriptComponent src="/js/stiky.js" /> */}

          {/* P-scroll js */}
          <ScriptComponent src="/plugins/p-scrollbar/p-scrollbar.js" />
          <ScriptComponent src="/plugins/p-scrollbar/p-scroll.js" />

          {/* INTERNAL Flot Charts js */}
          <ScriptComponent src="/plugins/flot/jquery.flot.js" />
          <ScriptComponent src="/plugins/flot/jquery.flot.fillbetween.js" />
          <ScriptComponent src="/plugins/flot/jquery.flot.pie.js" />
          <ScriptComponent src="/js/dashboard.sampledata.js" />
          <ScriptComponent src="/js/chart.flot.sampledata.js" />

          {/* INTERNAL Chart js */}
          <ScriptComponent src="/plugins/chart/chart.bundle.js" />
          <ScriptComponent src="/plugins/chart/utils.js" />

          {/* INTERNAL Apexchart js */}
          <ScriptComponent src="/js/apexcharts.js" />

          {/* INTERNAL Moment js */}
          <ScriptComponent src="/plugins/moment/moment.js" />

          {/* INTERNAL Index js */}
          {/* <ScriptComponent src="/js/index1.js" /> */}

          {/* INTERNAL Select2 js */}
          <ScriptComponent src="/plugins/select2/select2.full.min.js" />
          <ScriptComponent src="/js/select2.js" />

          {/* Simplebar JS */}
          <ScriptComponent src="/plugins/simplebar/js/simplebar.min.js" />

          {/* Rounded bar chart js */}
          <ScriptComponent src="/js/rounded-barchart.js" />

          {/* Custom js */}
          <ScriptComponent src="/js/custom.js" />

          {/* Switcher js */}
          <ScriptComponent src="/switcher/js/switcher.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
