import LogoQuran from "@/assets/quran-logo.webp";
import LayoutsHomePage from "@/layouts/homepage";
import { styledBtn } from "@/styles/styled";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import Link from "next/link";

const buttons = [
  { title: "Surah Al-Qur'an", uri: "/surah" },
  { title: "Niat Sholat", uri: "/niat-sholat" },
  { title: "Asmaul Husna", uri: "/asmaul-husna" },
  { title: "Doa Doa Harian", uri: "/surah" },
];

export default function Home() {
  return (
    <LayoutsHomePage title="Beranda">
      <Grid container spacing={2}>
        <Grid item xs={12} sx={{ mb: 3 }}>
          <Link href="/">
            <div className="flex justify-center">
              <Image src={LogoQuran} width={85} height={85} alt="Logo Quran" />
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
              Terakhir Dibaca
            </Button>
          </Link>
        </Grid>
      </Grid>
    </LayoutsHomePage>
  );
}
