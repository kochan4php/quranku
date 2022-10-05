const { default: Navbar } = require("@/components/Navbar");
const { default: Head } = require("next/head");

const Layouts = ({ title, children }) => (
  <>
    <Head>
      <title>{title} | Quranku</title>
    </Head>
    <header>
      <Navbar />
    </header>
    <main>
      <div className="container my-4">{children}</div>
    </main>
  </>
);

export default Layouts;
