import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Route, Routes, useLocation } from "react-router-dom";

import HighwayRating from "../../pages/HighwayRating";
import Highway from "../../pages/Highway";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

import {
  announcement,
  Head,
  Notification,
  questions,
  smallLogo,
  NavajnaLogo,
} from "../../Assests";
import { MainListItems } from "./ListItems";
import "./navbar.css";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import Dashboard from "../../Dashboard/Dashboard";
import PageTwo from "../../Dashboard/PageTwo";
import HighwaySafety from "../../Dashboard/HighwaySafety";
import UserSafety from "../../Dashboard/UserSafety";
import UserServices from "../../Dashboard/UserSafety";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    color: "#FFFFFF",
    backgroundColor: "#123073",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
      "& .css-16ac5r2-MuiButtonBase-root-MuiListItemButton-root": {
        "&:hover": {
          backgroundColor: "#134BC8 !important",
        },
      },
    }),
  },
}));

const mdTheme = createTheme();

const Navbar = () => {
  const location = useLocation();
  const [title, setTitle] = React.useState("NHAI Rating Analytics");

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [age, setAge] = React.useState("");
  const [one, setOne] = React.useState(false);
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  console.info(location.pathname);
  // const title =
  //   location.pathname === "/highway"
  //     ? "Bhavnagar -Talaja PKG-I(6.945 to 54.990)"
  //     : "NH-05 Ludhiana Talwandi";
  // var title = ""

  React.useEffect(() => {
    if (location.pathname === "/highway") {
      setTitle("Bhavnagar -Talaja PKG-I(6.945 to 54.990)");
    } else if (location.pathname === "/highway-rating") {
      setTitle("NH-05 Ludhiana Talwandi");
    } else if (location.pathname === "/highway-rating-details") {
      setTitle("NH-05 Ludhiana Talwandi : Highway Efficiency");
    } else if (location.pathname === "/highway-safety") {
      setTitle("NH-05 Ludhiana Talwandi : Highway Safety");
    } else if (location.pathname === "/user-services") {
      setTitle("NH-05 Ludhiana Talwandi : User Services");
    }
  }, [location.pathname]);
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex", background: "#F6F8FA" }}>
        <CssBaseline />

        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              backgroundColor: "white !important",
              height: "93px !important",
              color: "white",
            }}
          >
            {!open && <img src={smallLogo} alt="slogo" className="smallLogo" />}
            {one ? (
              <>
                {/* <Box
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    fontStyle: "italic",
                    width: "40vw",
                  }}
                > */}
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bolder", color: "black" }}
                >
                  {title}
                </Typography>
                {/* </Box> */}
                <Box sx={{ display: "flex", ml: "auto", alignItems: "center" }}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Source
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                        sx={{ borderRadius: "10px" }}
                      >
                        <MenuItem value={10}>Drone Video</MenuItem>
                        <MenuItem value={20}>NSV Video</MenuItem>
                        <MenuItem value={30}>Toll Data</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{ m: 3, py: 2, borderRadius: "10px" }}
                  >
                    Load Data
                  </Button>
                </Box>
              </>
            ) : (
              <>
                {/* <Paper
                  elevation={4}
                  sx={{
                    p: 3,
                    borderRadius: "20px",
                    fontStyle: "italic",
                    width: "90vw",
                  }}
                > */}
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "black" }}
                >
                  {title}
                </Typography>
                {/* </Paper> */}
              </>
            )}
            {/* <div className="searchWrapper">
              <input placeholder="Search Anything" className="searchBox" />
            </div>
            <IconButton  sx={{ padding: "16px",color:'white' }}>
              <img src={questions} alt="notifications" />
            </IconButton>
            <IconButton sx={{ padding: "16px" }}>
              <img src={Notification} alt="notifications" />
            </IconButton>
            <IconButton  sx={{ padding: "16px" }}>
              <img src={announcement} alt="announcement" />
            </IconButton> */}
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar>
            <div className="logoWrapper">
              <img className="logo" src={NavajnaLogo} alt="logo" />
            </div>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems open={open} />
          </List>
          {open ? (
            <ChevronLeftIcon onClick={toggleDrawer} className="icon" />
          ) : (
            <ChevronRightIcon onClick={toggleDrawer} className="icon" />
          )}
        </Drawer>

        {/* {one ? (
          <>
            <Container maxWidth="100vw" sx={{ pt: 11 }}>
              <Box sx={{ py: 5 }}>
                <Dashboard />
              </Box>
            </Container>
          </>
        ) : (
          <>
            <Container maxWidth="100vw" sx={{ pt: 11 }}>
              <Box sx={{ py: 5 }}>
                <PageTwo />
              </Box>
              
            </Container>
          </>
        )} */}
        {/* <Box
          component="main"
          sx={{
            backgroundColor: "#F6F8FA",
            flexGrow: 1,
            // maxHeight: "100vh",
            height: "100%",
            overflow: "auto",
          }}
        >
          <Toolbar /> */}
        <Container maxWidth="100vw" sx={{ pt: 11 }}>
          <Box sx={{ py: 5 }}>
            <Routes>
              <Route path="highway-rating" element={<Dashboard />} />
              <Route path="highway-rating-details" element={<PageTwo />} />
              <Route path="highway" element={<Highway />} />
              <Route path="highway-safety" element={<HighwaySafety />} />
              <Route path="user-services" element={<UserServices />} />
            </Routes>
          </Box>
        </Container>
      </Box>
      {/* </Box> */}
    </ThemeProvider>
  );
};

export default Navbar;
