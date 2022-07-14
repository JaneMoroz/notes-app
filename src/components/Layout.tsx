import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  AppBar,
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Avatar,
} from "@mui/material";
import { FC, ReactElement } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";

const drawerWidth = "240px";

const classes = {
  page: {
    background: "#f9f9f9",
    width: "100%",
    padding: "24px",
    marginTop: "60px",
  },
  drawer: {
    width: drawerWidth,
    ".MuiDrawer-paper": {
      width: drawerWidth,
    },
  },
  root: {
    display: "flex",
  },
  active: {
    background: "#f4f4f4",
  },
  title: {
    padding: "16px",
  },
  appbar: {
    width: `calc(100% - ${drawerWidth})`,
  },
  date: {
    flexGrow: 1,
    marginRight: "16px",
  },
  avatar: {
    marginLeft: "16px",
  },
};

const Layout: FC = (): ReactElement => {
  const navigate = useNavigate();
  const location = useLocation();
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="primary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="primary" />,
      path: "/create",
    },
  ];
  return (
    <div style={classes.root}>
      {/* app bar */}
      <AppBar sx={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography sx={classes.date}>
            Welcome! Today is the {format(new Date(), "do MMMM")}
          </Typography>
          <Typography>Jane</Typography>
          <Avatar src="/cat.jpg" sx={classes.avatar} />
        </Toolbar>
      </AppBar>
      {/* side drawer */}
      <Drawer sx={classes.drawer} variant="permanent" anchor="left">
        <div>
          <Typography variant="h5" sx={classes.title}>
            Notes keeper
          </Typography>
        </div>
        {/* List if links */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => navigate(item.path)}
              sx={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={classes.page}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
