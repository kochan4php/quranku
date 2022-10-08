import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { styledBtnCapitalize } from "@/styles/styled";

const CustomCard = ({ data }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card variant="outlined">
        <CardContent sx={{ pb: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">{data.number}. </Typography>
            <Typography variant="h4">{data.name.short}</Typography>
          </div>
          <div
            style={{
              marginBottom: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography color="text.secondary">
              {data.name.transliteration.id}
            </Typography>
            <Typography color="text.secondary">
              {data.name.translation.id}
            </Typography>
          </div>
          <Typography variant="body2">
            {data.revelation.id} ({data.numberOfVerses} Ayat)
          </Typography>
          <ButtonGroup
            sx={{
              mt: 2,
              mb: 0,
              width: "100%",
            }}
          >
            <Button
              fullWidth
              size="small"
              variant="contained"
              color="warning"
              sx={styledBtnCapitalize}
            >
              Baca
            </Button>
            <Button
              fullWidth
              size="small"
              variant="contained"
              color="secondary"
              sx={styledBtnCapitalize}
              onClick={handleClickOpen}
            >
              Tafsir
            </Button>
          </ButtonGroup>
        </CardContent>
      </Card>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Tafsir Surat {data.name.transliteration.id}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data.tafsir.id}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            autoFocus
            variant="contained"
            color="primary"
            sx={styledBtnCapitalize}
          >
            Tutup
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CustomCard;
