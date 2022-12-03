import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import ApexChart from "../Dashboard/ApexCharts";

export default function LineGraph() {
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
             Graph visualization of each mark
          </Typography>
          <Typography variant="p" sx={{ color: "#969ea9" }}>
            Line graph deprecting no. of marks scored/deducted per second of the video
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Box sx={{ width: "30vw" }}>
              <ApexChart />
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
