import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  Drawer,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FC, ReactElement } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const drawerWidth = "240px";

const classes = {
  page: {
    background: "#f9f9f9",
    width: "100%",
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
      {/* side drawer */}
      <Drawer sx={classes.drawer} variant="permanent" anchor="left">
        <div>
          <Typography variant="h5">Super Notes</Typography>
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
