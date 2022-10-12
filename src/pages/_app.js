import "@/styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";
import Router from "next/router";
import nProgress from "nprogress";
import Head from "next/head";

Router.onRouteChangeStart = (url) => nProgress.start();
Router.onRouteChangeComplete = () => nProgress.done();
Router.onRouteChangeError = () => nProgress.done();

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
      />
    </Head>
    <CssBaseline />
    <RecoilNexus />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
