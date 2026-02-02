import WeatherApp from "./WeatherApp";
import { Box, Typography } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Box className="appRoot">
      <Box className="glass bigGlass">
        <Typography variant="h3" fontWeight="700" gutterBottom>
          ⛅ Weather App
        </Typography>

        <Typography variant="h6" sx={{ opacity: 0.8, mb: 3 }}>
          Get real-time weather updates for any city
        </Typography>

        <WeatherApp />
      </Box>
    </Box>
  );
}

export default App;

