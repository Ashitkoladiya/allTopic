import * as React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import { Link, useLocation } from "react-router-dom";
import RouteIcon from "@mui/icons-material/Route";
import ChatIcon from "@mui/icons-material/Chat";
import AdbIcon from "@mui/icons-material/Adb";
import AddIcon from "@mui/icons-material/Add";
import ChecklistIcon from "@mui/icons-material/Checklist";
import ListAltIcon from "@mui/icons-material/ListAlt";
import BugReportIcon from "@mui/icons-material/BugReport";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import ImageIcon from '@mui/icons-material/Image';
import GroupIcon from '@mui/icons-material/Group';

const menus = [
  {
    icon: <RouteIcon />,
    menuTitle: "Routing",
    path: "/routing",
  },
  {
    icon: <InfoIcon />,
    menuTitle: "About",
    path: "/about",
    child: [
      {
        icon: "a",
        menuTitle: "Child1",
        child: [{ icon: "i", menuTitle: "innerTitle", path: "/inner-child" }],
        path: "/child1",
      },
      {
        icon: "b",
        menuTitle: "Child2",
        path: "/child2",
      },
    ],
  },
  {
    icon: <ChatIcon />,
    menuTitle: "Comments",
    path: "/comments",
  },
  {
    icon: <AdbIcon />,
    menuTitle: "Pokemon",
    path: "/pokemon",
  },
  {
    icon: <AddIcon />,
    menuTitle: "Accordion",
    path: "/accordion",
  },
  {
    icon: <ChecklistIcon />,
    menuTitle: "Form",
    path: "/form",
  },
  {
    icon: <ChecklistIcon />,
    menuTitle: "Form Action",
    path: "/form-action",
  },
  {
    icon: <ListAltIcon />,
    menuTitle: "Todo Task",
    path: "/todo",
  },
  {
    icon: <BugReportIcon />,
    menuTitle: "Ticket Generate",
    path: "/ticket",
  },
  {
    icon: <SportsEsportsIcon />,
    menuTitle: "Guess Number",
    path: "/guess-number",
  },
  {
    icon: <LanguageIcon />,
    menuTitle: "Select Country",
    path: "/country",
  },
  {
    icon: <SearchIcon />,
    menuTitle: "Search",
    path: "/search",
  },
  {
    icon: <ImageIcon />,
    menuTitle: "Image Priview",
    path: "/image-show",
  },
  {
    icon: <GroupIcon />,
    menuTitle: "Button Group",
    path: "/button-groups",
  },
];
export const MenuDrawer = ({ Menus = menus }) => {
  return (
    <div>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {Menus.map((item, index) => {
          return <Menutry item={item} key={index} />;
        })}
      </List>
    </div>
  );
};

const Menutry = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => {
    const findData = (data) => {
      return data.find(
        (el) =>
          location.pathname === el.path ||
          (el?.child?.length && findData(el?.child || []))
      );
    };
    const data = findData(item?.child || []);
    if (data) {
      setOpen(true);
    }
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        sx={{ backgroundColor: location.pathname === item.path && "red" }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <Link to={item?.path}>
          {" "}
          <ListItemText primary={item.menuTitle} />
        </Link>
        {item.child && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      {item?.child?.length > 0 && (
        <Collapse
          in={open}
          timeout="auto"
          unmountOnExit
          sx={{ marginLeft: "30px" }}
        >
          <MenuDrawer Menus={item.child} />
        </Collapse>
      )}
    </>
  );
};
