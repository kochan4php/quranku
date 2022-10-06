import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CustomCard = ({ data }) => {
  console.log(data);
  return (
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
        <Button
          size="small"
          variant="contained"
          color="warning"
          sx={{
            textTransform: "capitalize",
            mt: 2,
            mb: 0,
            boxShadow: 0,
            "&:hover": { boxShadow: 0 },
          }}
        >
          Baca
        </Button>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
