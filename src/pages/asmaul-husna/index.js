import { memo } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Layouts from "@/layouts";

const AsmaulHusna = () => {
  return (
    <Layouts title="Asmaul Husna">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center" sx={{ mb: 1 }}>
            Asmaul Husna
          </Typography>
        </Grid>
      </Grid>
    </Layouts>
  );
};

export default memo(AsmaulHusna);
