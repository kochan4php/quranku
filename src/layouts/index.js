import Navbar from "@/components/Navbar";
import { Container } from "@mui/material";
import Head from "next/head";

const Layouts = ({ title, children }) => (
  <>
    <Head>
      <title>{title} | Quranku</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      <Container sx={{ mt: 11, mb: 2 }} maxWidth="xl">
        {children}
      </Container>
    </main>
  </>
);

export default Layouts;
