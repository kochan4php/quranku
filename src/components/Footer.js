import { fixedBottomPosition, whiteColor } from "@/styles/styled";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useRouter } from "next/router";

const navigations = (router) => [
  {
    sx: whiteColor,
    label: "Kembali",
    icon: <ArrowBackIcon />,
    onClick: () => {
      if (router.asPath === "/surah") return;
      router.push("/surah", undefined, { scroll: false });
    },
  },
  {
    sx: whiteColor,
    label: "Beranda",
    icon: <HomeIcon />,
    onClick: () => router.push("/"),
  },
  {
    sx: whiteColor,
    label: "Favorit",
    icon: <FavoriteIcon />,
    onClick: () => router.push("/surah"),
  },
  {
    sx: whiteColor,
    label: "Tersimpan",
    icon: <BookmarkIcon />,
    onClick: () => router.push("/surah"),
  },
];

const Footer = () => {
  const router = useRouter();
  const nav = navigations(router);

  return (
    <BottomNavigation showLabels sx={fixedBottomPosition}>
      {nav.map((navigation, index) => (
        <BottomNavigationAction key={index} {...navigation} />
      ))}
    </BottomNavigation>
  );
};

export default Footer;
