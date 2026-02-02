import { Card, CardContent, Typography, Grid } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./infoBox.css";

export default function InfoBox({ info }) {
  if (!info) return null;

  return (
    <Card className="weatherCard bigCard">
      <CardContent>
        <Typography variant="h4" fontWeight="600" gutterBottom>
          {info.city}
        </Typography>

        <Typography variant="h2" fontWeight="700">
          🌡️{info.temp}°C
        </Typography>

        <Typography variant="h6" sx={{ textTransform: "capitalize", mb: 3 }}>
          {info.weather}
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={6}>
            <Typography variant="h6"> 💧Humidity</Typography>
            <Typography variant="h5">{info.humidity}%</Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="h6"> ⛅Condition</Typography>
            <Typography variant="h5">
              <WbSunnyIcon /> Clear
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

