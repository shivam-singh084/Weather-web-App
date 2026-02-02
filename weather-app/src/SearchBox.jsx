import { TextField, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city) return;
    updateInfo(city);
    setCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
        <TextField
          fullWidth
          size="large"
          label="Enter city name"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <Button
          size="large"
          type="submit"
          variant="contained"
          startIcon={<SearchIcon />}
          sx={{ px: 4 }}
        >
          Search
        </Button>
      </Stack>
    </form>
  );
}

