import data from "@/data/AsmaulHusna.json";
import Layouts from "@/layouts";
import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { memo } from "react";

const customFontSize = {
  fontSize: {
    xs: "1.05rem",
    sm: "1.1rem",
    md: "1.2rem",
    lg: "1.25rem",
  },
};

export default memo(function AsmaulHusna() {
  return (
    <Layouts title="Asmaul Husna">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" sx={{ mb: 1, mt: 0.5 }}>
            Asmaul Husna
          </Typography>
        </Grid>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
            <Card variant="outlined">
              <CardActionArea sx={{ cursor: "default", pointerEvents: "none" }}>
                <CardContent>
                  <div
                    style={{ marginBottom: 3 }}
                    className="flex justify-between items-center"
                  >
                    <Typography variant="h5">{item.urutan}. </Typography>
                    <Typography variant="h4">{item.arab}</Typography>
                  </div>
                  <Typography sx={customFontSize}>{item.latin}</Typography>
                  <Typography sx={{ mt: 0.4, ...customFontSize }}>
                    {item.arti}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layouts>
  );
});
