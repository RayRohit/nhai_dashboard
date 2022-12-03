import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import Pie from "../Dashboard/Pie";

export default function PieGraph() {
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
          <Box>
            <Typography
              variant="h5"
              sx={{ color: "#e4e6e9", fontWeight: "bolder" }}
            >
              Gap Analysis of <span style={{ color: "#F5365C" }}>25%</span> for
              Evaluation Rating Index
            </Typography>
            <Typography variant="p" sx={{ color: "#969ea9" }}>
              Spread of paramaters contributing to Evaluation Rating degradation
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <Box>
                <Pie />
              </Box>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
