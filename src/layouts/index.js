import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Container from "@mui/material/Container";
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
      <Container sx={{ mt: 10, mb: 10 }} maxWidth="xl">
        {children}
      </Container>
    </main>
    <footer>
      <Footer />
    </footer>
  </>
);

export default Layouts;
