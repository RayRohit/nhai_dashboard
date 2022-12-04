import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import {
  Preferences,
  Actions,
  Analytics,
  Contacts,
  MyCalender,
  MyCard,
  MyTeam,
  solidadd,
  SidebarAdd,
  grayLogo,
  license,
  BillingManagement,
  NavajnaLogo,
} from "../../Assests";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export const MainListItems = ({ open }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [copen, setCopen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const Menuopen = Boolean(anchorEl);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event) => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setCopen(!copen);
  };

  return (
    <div className="listContainer">
      <div className={open ? "sidebartop sidebartop-scroll" : "sidebartop"}>
        <NavLink to="analytics" className="text-white sidebarStyle">
          <img className="sidebar-icons" src={Analytics} alt="Analytics" />
          Analytics
        </NavLink>

        {open ? (
          <div>
            <NavLink
              to="mycontact"
              className="text-white sidebarStyle"
              onClick={handleClick}
            >
              <img className="sidebar-icons" src={Contacts} alt="Contacts" />
            Operations & Maintenance 
            </NavLink>
            <Collapse in={copen} timeout="auto" unmountOnExit>
              <List className="listgroup" component="div" disablePadding>
                <NavLink to="mycontacts" className="collapseStyle">
                  Highway Conditions
                </NavLink>
                <NavLink to="highway-rating" className="collapseStyle">
                  Highway Rating
                </NavLink>
                <NavLink to="phonebookcontacts" className="collapseStyle">
                  Highway Strength
                </NavLink>
                <NavLink to="highway" className="collapseStyle">
                  Highway
                </NavLink>
                <NavLink to="highwayprogress" className="collapseStyle">
                  Highway Progress
                </NavLink>
              </List>
            </Collapse>
          </div>
        ) : (
          <div>
            <ListItemButton onClick={handleClickListItem}>
              <ListItemIcon>
                <img className="sidebar-icons" src={Contacts} alt="Contacts" />
              </ListItemIcon>
              <ListItemText primary="Contacts" />
            </ListItemButton>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={Menuopen}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
              sx={{ ml: 7, mt: -6 }}
            >
              <Link to="mycontacts" className="link_style text-black">
                <MenuItem onClick={(event) => handleMenuItemClick(event)}>
                  Highway Conditions
                </MenuItem>
              </Link>
              <Link to="highway-rating" className="link_style text-black">
                <MenuItem onClick={(event) => handleMenuItemClick(event)}>
                  Highway Rating
                </MenuItem>
              </Link>
              <Link to="phonebookcontacts" className="link_style text-black">
                <MenuItem onClick={(event) => handleMenuItemClick(event)}>
                  Highway Strength
                </MenuItem>
              </Link>
              <Link to="highway" className="link_style text-black">
                <MenuItem onClick={(event) => handleMenuItemClick(event)}>
                  Highway
                </MenuItem>
              </Link>
              <Link to="highwayprogress" className="link_style text-black">
                <MenuItem onClick={(event) => handleMenuItemClick(event)}>
                  Highway Progress
                </MenuItem>
              </Link>

              {/* <Link to="highway-safety" className="link_style text-black">
                <MenuItem onClick={(event) => handleMenuItemClick(event)}>
                  Highway
                </MenuItem>
              </Link>
              <Link to="user-safety" className="link_style text-black">
                <MenuItem onClick={(event) => handleMenuItemClick(event)}>
                  Highway
                </MenuItem>
              </Link> */}
            </Menu>
          </div>
        )}
        {/* <NavLink to="mycardpage" className="text-white sidebarStyle">
                    <img className="sidebar-icons" src={MyCard} alt="MyCard" />
                    My Card
                </NavLink>
                <NavLink to="templateview" className="text-white sidebarStyle">
                    <img className="sidebar-icons" src={MyCard} alt="MyCard" />
                    Card Templates
                </NavLink>
                <NavLink to="billingmanagement" className="text-white sidebarStyle">
                    <img className="sidebar-icons" src={license} alt="License Management" />
                    Billing Management
                </NavLink>
                <NavLink to="licensemanagement" className="text-white sidebarStyle">

                    <img className="sidebar-icons" src={license} alt="License Management" />
                    License Management
                </NavLink>
                <NavLink to="action" className="text-white sidebarStyle">
                    <img className="sidebar-icons" src={Actions} alt="Actions" />
                    Actions
                </NavLink>
                <NavLink to="calender" className="text-white sidebarStyle">
                    <img className="sidebar-icons" src={MyCalender} alt="MyCalendar" />
                    Calender
                </NavLink>
                <NavLink to="preferences" className="text-white sidebarStyle">
                    <img className="sidebar-icons" src={Preferences} alt="Preferences" />
                    App Preferences
                </NavLink> */}
      </div>
      <div className="Sidebarbottom">
        {/* {open && (
                    <ListItemButton sx={{ mt: 3, ml: 5, mr: 4 }}>
                        <ListItemText primary="Powered by" />
                        <ListItemIcon>
                            <img className="sidebarlogo" src={NavajnaLogo} alt="Preferences" />
                        </ListItemIcon>
                    </ListItemButton>
                )} */}
      </div>
    </div>
  );
};
