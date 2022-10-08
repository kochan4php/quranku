import Layouts from "@/layouts";
import { styledBtn } from "@/styles/styled";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

const buttons = [
  { title: "Surah", uri: "/surah" },
  { title: "Hadits", uri: "/" },
  { title: "Berita Islami", uri: "/" },
  { title: "Jadwal Sholat", uri: "/" },
];

const Home = () => (
  <Layouts title="Beranda" bgimage="/quran-compressed.webp">
    <Grid container spacing={2}>
      <Grid item xs={12} justifyContent="center">
        <Link href="/">
          <div className="flex justify-center">
            <Image src="/quran.png" width={100} height={100} />
          </div>
        </Link>
      </Grid>
      {buttons.map(({ title, uri }, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Link href={uri}>
            <Button
              fullWidth
              variant="outlined"
              style={{ color: "white", borderColor: "white" }}
              sx={styledBtn}
            >
              {title}
            </Button>
          </Link>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Link href="/">
          <Button
            fullWidth
            variant="outlined"
            style={{ color: "white", borderColor: "white" }}
            sx={styledBtn}
          >
            Pengaturan
          </Button>
        </Link>
      </Grid>
    </Grid>
  </Layouts>
);

export default Home;
