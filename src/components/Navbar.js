import { styledBtn } from "@/styles/styled";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import { useState } from "react";

const menuItem = [
  { title: "Beranda", uri: "/" },
  { title: "Surah Al-Qur'an", uri: "/surah" },
  { title: "Niat Sholat", uri: "/niat-sholat" },
  { title: "Asmaul Husna", uri: "/asmaul-husna" },
  { title: "Doa Doa Harian", uri: "/doa-doa-harian" },
];

const Navbar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  const handleClickMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="success" sx={{ boxShadow: 0 }}>
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={handleClickMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMenu}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              {menuItem.map(({ title, uri }, index) => (
                <Link href={uri} key={index}>
                  <MenuItem onClick={handleCloseMenu}>{title}</MenuItem>
                </Link>
              ))}
            </Menu>
            <Link href="/">
              <Typography variant="h6" sx={{ flexGrow: 1, cursor: "pointer" }}>
                Quranku
              </Typography>
            </Link>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleClickDialog}
            >
              <SearchIcon />
            </IconButton>
            <Dialog open={openDialog} onClose={handleCloseDialog}>
              <DialogTitle>Cari Surah</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Cari surah Al-Qur&apos;an yang ingin kamu baca hari ini
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="search"
                  label="Cari Surah"
                  type="search"
                  fullWidth
                  variant="standard"
                  name="search"
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleCloseDialog}
                  variant="contained"
                  color="error"
                  sx={styledBtn}
                >
                  Batalkan
                </Button>
                <Button
                  onClick={handleCloseDialog}
                  variant="contained"
                  color="success"
                  sx={styledBtn}
                >
                  Ok
                </Button>
              </DialogActions>
            </Dialog>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
