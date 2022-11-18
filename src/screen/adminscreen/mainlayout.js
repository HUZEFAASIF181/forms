import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Router, Routes, useNavigate } from "react-router-dom";
import Quiz from "./quiz";
import CourceForm from "./courseform";
import CreateResult from "./createresult";
import RegitsrationForm from "../registration";
import Result from "../result";
import Home from "../home";
import Signup from "../signup";
import StudentList from "../students";
import Courses from "./courselist";
import Form from "../formcontrol";
import Trainerform from "./trainerform";
import Trainerlist from "./trainerlist";
import Countries from "./countries";
import Cities from "./cities";
import { logoutUser } from "../../config/firebasemethods";
import { Menu, MenuItem } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import StudentProfile from "../studentProfile";

const drawerWidth = 240;

function MainLyout(props) {
  const { window } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [menuLinks, setMenuLinks] = React.useState([
    {
      displayName: "Home",
      routeName: "home",
    },
    {
      displayName: "SignUp",
      routeName: "signup",
    },
    {
      displayName: "Quiz",
      routeName: "quiz",
    },
    {
      displayName: "Course",
      routeName: "courceform",
    },
    {
      displayName: "Course List",
      routeName: "courselist",
    },

    {
      displayName: "Registration Form",
      routeName: "form",
    },


    // {
    //   displayName: "Login",
    //   routeName: "login",
    // },

    {
      displayName: "Students",
      routeName: "stdlist",
    },
    {
      displayName: "Create Result",
      routeName: "createresult",
    },
    {
      displayName: "Result",
      routeName: "result",
    },
    {
      displayName: "Form Control",
      routeName: "formc",
    },
    // {
    //   displayName: "Student Profile",
    //   routeName: "profile",
    // },
    {
      displayName: "Trainer Registration Form",
      routeName: "tform",
    },
    {
      displayName: "Trainers List",
      routeName: "tlist",
    },
    {
      displayName: "Country",
      routeName: "countries",
    },
    {
      displayName: "Cities",
      routeName: "cities",
    },
    {
      displayName: "Student Profile",
      routeName: "profile",
    },
  ]);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let clickNavigate = (routeName) => {
    navigate(routeName);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuLinks.map((x, i) => (
          <ListItem key={i} disablePadding>
            <ListItemButton onClick={() => clickNavigate(x.routeName)}>
              <ListItemIcon>
                {i % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={x.displayName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const logout = () => {
    logoutUser()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" style={{flexGrow: 1, display: "flex", justifyContent: "space-between", fontSize: 50}}>
            LMS
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setAnchorEl(!anchorEl)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(!anchorEl)}
            >
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Routes>
          <Route path="quiz" element={<Quiz />} />
          <Route path="courceform" element={<CourceForm />} />
          <Route path="createresult" element={<CreateResult />} />
          <Route path="form" element={<RegitsrationForm />} />
          <Route path="result" element={<Result />} />
          <Route path="home" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="stdlist" element={<StudentList />} />
          <Route path="courselist" element={<Courses />} />
          <Route path="formc" element={<Form />} />
          <Route path="tform" element={<Trainerform />} />
          <Route path="tlist" element={<Trainerlist />} />
          <Route path="countries" element={<Countries />} />
          <Route path="cities" element={<Cities />} />
          <Route path="profile" element={<StudentProfile />} />
        </Routes>
      </Box>
    </Box>
  );
}

MainLyout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MainLyout;