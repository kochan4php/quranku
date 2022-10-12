import { fixedBottomPosition } from "@/styles/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <BottomNavigation showLabels sx={fixedBottomPosition}>
      <BottomNavigationAction
        sx={{ color: "#fff !important" }}
        label="Kembali"
        icon={<ArrowBackIcon />}
        onClick={() => {
          if (router.asPath === "/surah") return;
          router.push("/surah", undefined, { scroll: false });
        }}
      />
      <BottomNavigationAction
        sx={{ color: "#fff !important" }}
        label="Home"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        sx={{ color: "#fff !important" }}
        label="Favorite"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        sx={{ color: "#fff !important" }}
        label="Tersimpan"
        icon={<BookmarkIcon />}
      />
    </BottomNavigation>
  );
};

export default Footer;
