import { Grid, Paper, useMediaQuery } from "@mui/material";
import React from "react";
// import Boxes from "./Boxes";

import { Box } from "@mui/system";

import LineGraph from "../TwoGraphs/LineGraph";
import CompleteGraph from "../TwoGraphs/CompleteGraph";
import efficiency from "../Assests/Images/efficiency.png";
import safety from "../Assests/Images/safety.png";
import services from "../Assests/Images/services.png";
import { useNavigate } from "react-router-dom";
import Cards from "./Card";

export default function Dashboard() {

  const navigate = useNavigate();
  return (
    <>
    
      <Grid container spacing={3} justifyContent="space-between">
        <Grid item xs={2.5} md={1.5} lg={2} sx={{ mr: 6 }}>
          <Box
            onClick={() => {
              navigate("/highway-rating-details");
            }}
          >
            <Cards image={efficiency} text={"Highway Efficiency"} />
          </Box>
        </Grid>
        <Grid item xs={5} md={5} lg={5} sx={{ ml: 2 }}>
          <LineGraph />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <CompleteGraph />
        </Grid>
        {/* -------------------------- */}
        <Grid item xs={2.5} md={1.5} lg={2} sx={{ mr: 6 }}>
          <Box
            onClick={() => {
              navigate("/highway-safety");
            }}
          >
            <Cards image={safety} text={"Highway Safety"} />
          </Box>
        </Grid>
        <Grid item xs={5} md={5} lg={5} sx={{ ml: 2 }}>
          <LineGraph />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <CompleteGraph />
        </Grid>
        {/* --------------------------------- */}
        <Grid item xs={2.5} md={2.5} lg={2} sx={{ mr: 6 }}>
          <Box
            onClick={() => {
              navigate("/user-services");
            }}
          >
            <Cards image={services} text={"User Services"} />
          </Box>
        </Grid>
        <Grid item xs={5} md={5} lg={5} sx={{ ml: 2 }}>
          <LineGraph />
        </Grid>
        <Grid item xs={4} md={4} lg={4}>
          <CompleteGraph />
        </Grid>
      </Grid>
    </>
  );
}
{
  /* <Grid container sx={{ justifyContent: "space-around" }}>
<Grid item lg={2} md={2} xl={2}>
  <Grid container spacing={2} direction="column">
    <Grid item xs>
        <Cards />
    </Grid>
    <Grid item xs>
      <Cards />
    </Grid>
    <Grid item xs>
      <Cards />
    </Grid>
  </Grid>
</Grid>
<Grid item lg={5} md={5} xl={5}>
  <Grid container spacing={2} direction="column">
    <Grid item xs>
      <RangeMap />
    </Grid>
    <Grid item xs>
      <LineCharts />
    </Grid>
  </Grid>
</Grid>
{/* <Grid item lg={5} md={5} xl={5}>
  <LineCharts />
</Grid> */
}
