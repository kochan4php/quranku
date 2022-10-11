import { Container } from "@mui/material";
import Head from "next/head";

const LayoutsHomePage = ({ title, children }) => (
  <>
    <Head>
      <title>{title} | Quranku</title>
    </Head>
    <main
      className="min-h-screen flex justify-center items-center"
      style={{ backgroundColor: "black" }}
    >
      <Container maxWidth="xl">{children}</Container>
    </main>
  </>
);

export default LayoutsHomePage;
