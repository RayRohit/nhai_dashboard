import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Complete from "../Dashboard/Complete";

export default function CompleteGraph() {
  return (
    <>
      <Paper
        sx={{
          background: "#273143",
          p: 2,
          height: "300px",
          borderRadius: "10px",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
          >
            Score Analysis
          </Typography>
          <Typography variant="p" sx={{ color: "#969ea9" }}>
            Stacked Bar Showing Total No. of Marks Acheived Through AI Engine.
          </Typography>
          <Box>
            <Complete />
          </Box>
        </Box>
      </Paper>
    </>
  );
}
