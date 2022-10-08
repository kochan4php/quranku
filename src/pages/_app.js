import "@/styles/globals.css";
import CssBaseline from "@mui/material/CssBaseline";
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

const MyApp = ({ Component, pageProps }) => (
  <RecoilRoot>
    <CssBaseline />
    <RecoilNexus />
    <Component {...pageProps} />
  </RecoilRoot>
);

export default MyApp;
