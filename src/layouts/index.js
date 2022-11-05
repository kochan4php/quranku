import Navbar from "@/components/Navbar";
import Container from "@mui/material/Container";
import Head from "next/head";
import { memo } from "react";

export default memo(function Layouts({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Quranku`}</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        <Container sx={{ mt: 10, mb: 3 }} maxWidth="xl">
          {children}
        </Container>
      </main>
    </>
  );
});
