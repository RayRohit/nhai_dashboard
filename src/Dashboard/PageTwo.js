import {
  Box,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Gauge from "../TwoGraphs/Gauge";
import PieGraph from "../TwoGraphs/PieGraph";
import Stacked from "../TwoGraphs/Stacked";
import TwoCard from "../TwoGraphs/TwoCard";
import Cards from "./Card";
import GaugeChart from "./GaugeChart";
import Pie from "./Pie";
import StackedBar from "./StackedBar";
// import StackedBar from "./StackedBar";
import drone from "../Assests/Images/drone.png";
import nsv from "../Assests/Images/nsv.png";
import fast from "../Assests/Images/fast.png";

export default function PageTwo() {
  const matches = useMediaQuery("(min-width:2560px)");

  return (
    <>
      {matches ? (
        <>
          <Grid container spacing={3} sx={{ justifyContent: "space-around" }}>
            <Grid item lg={3} xl={1.6}>
              <TwoCard image={drone} text={"Drone Data"} />
            </Grid>
            <Grid item lg={9} xl={3}> 
              <Gauge />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked />
            </Grid>
            {/* -------------------------------------------- */}
            <Grid item lg={3} xl={1.6}>
              <TwoCard image={nsv} text={"NSV Data"} />
            </Grid>
            <Grid item lg={9} xl={3}>
              <Gauge />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked />
            </Grid>
            {/* =================================================== */}
            <Grid item lg={3} xl={1.6}>
              <TwoCard image={fast} text={"FASTag Data"} />
            </Grid>
            <Grid item lg={9} xl={3}>
              <Gauge />
            </Grid>
            <Grid item lg={6} xl={4}>
              <PieGraph />
            </Grid>
            <Grid item lg={6} xl={3}>
              <Stacked />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container spacing={3} sx={{ justifyContent: "space-around" }}>
            <Grid item lg={3} xl={3}>
              <TwoCard image={drone} text={"Drone Data"} />
            </Grid>
            <Grid item lg={9} xl={9}>
              <Gauge />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked />
            </Grid>
            {/* -------------------------------------------- */}
            <Grid item lg={3} xl={3}>
              <TwoCard image={nsv} text={"NSV Data"} />
            </Grid>
            <Grid item lg={9} xl={9}>
              <Gauge />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked />
            </Grid>
            {/* =================================================== */}
            <Grid item lg={3} xl={3}>
              <TwoCard image={fast} text={"FASTag Data"} />
            </Grid>
            <Grid item lg={9} xl={9}>
              <Gauge />
            </Grid>
            <Grid item lg={6} xl={6}>
              <PieGraph />
            </Grid>
            <Grid item lg={6} xl={6}>
              <Stacked />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
