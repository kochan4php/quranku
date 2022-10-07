import { styledBtn } from "@/styles/styledBtn";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="success" sx={{ boxShadow: 0 }}>
        <Container maxWidth="xl">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <Link href="/">
                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              <Link href="/">
                <MenuItem onClick={handleClose}>Myaccount</MenuItem>
              </Link>
              <Link href="/">
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Link>
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
              onClick={handleClickOpenDialog}
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
}
