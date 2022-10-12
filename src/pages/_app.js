import "@/styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import NextNProgress from "nextjs-progressbar";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <NextNProgress color="#FFC500" height={3} />
    <CssBaseline />
    <RecoilNexus />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
