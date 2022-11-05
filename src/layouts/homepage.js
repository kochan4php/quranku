import { Container } from "@mui/material";
import Head from "next/head";
import { memo } from "react";

export default memo(function LayoutsHomePage({ title, children }) {
  return (
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
});
