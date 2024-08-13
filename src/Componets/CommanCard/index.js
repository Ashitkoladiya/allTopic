import React, { useState } from "react";
import { CardDetail } from "../ButtonGroups";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Menu, MenuItem } from "@mui/material";

function CommanCard() {
     const [anchorEl, setAnchorEl] = React.useState(null);
     const [isHart, setIsHart] = useState(false);
     const open = Boolean(anchorEl);
     const handleHartClick = () => {
          setIsHart(!isHart);
     };
     const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
          setAnchorEl(null);
     };
     return (
          <>
               <CardDetail
                    avtarOnClick={() => console.log("hi")}
                    mainCardWrapperStyle={{
                         width: "100%",
                         height: "auto",
                         padding: "10px",
                         display: "flex",
                         justifyContent: "space-around",
                         alignItems: "center",
                         gap: "10px",
                    }}
                    cardstyle={{ backgroundColor: "#000", color: "#fff" }}
                    // avtar property
                    avtar={"A"}
                    avtarstyle={{ backgroundColor: "#EDEDED", color: "#000", cursor: "pointer" }}
                    // card content
                    cardTitle={"Shrimp and Chorizo Paella"}
                    cardTitleStyle={{ fontSize: "16px", color: "white" }}
                    cardDate={"September 14, 2016"}
                    cardDateStyle={{ color: "#fff", fontSize: "14px" }}
                    cardDescription={
                         "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
                    }
                    cardDescriptionStyle={{
                         fontSize: "14px",
                         color: "#fff",
                         padding: "10px",
                    }}
                    // more Icon Propreties
                    moreDetailIcon={<MoreVertIcon />}
                    moreDetailIconStyle={{ color: "#fff", cursor: "pointer" }}
                    // main Image
                    cardImage={"https://mui.com/static/images/cards/paella.jpg"}
                    cardImageWrapperStyle={{ width: "100%", height: "auto" }}
                    cardImageStyle={{ width: "100%", height: "auto" }}
                    footerIconWrapper={{
                         display: "flex",
                         justifyContent: "space-between",
                         padding: "10px",
                    }}
                    // footer
                    mainFooterLikeShereIconStyle={{ display: "flex", gap: "10px" }}
                    likeIcon={<FavoriteIcon />}
                    likeIconStyle={{ cursor: "pointer", color: isHart && "pink" }}
                    handleHartClick={handleHartClick}
                    shereIcon={<ShareIcon />}
                    shereIconStyle={{ cursor: "pointer" }}
                    collapesIcon={<ExpandMoreIcon />}
                    collapesIconStyle={{ cursor: "pointer" }}
                    // popover

                    moreIconHandleClick={handleClick}
                    // moreIconId={"basic-button"}
                    moreIconAriaControls={open ? "basic-menu" : undefined}
                    moreIconAriaHaspopup={"true"}
                    moreIconAriaExpanded={open ? "true" : undefined}
               />

               <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                         "aria-labelledby": "basic-button",
                    }}
               >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
               </Menu>
          </>
     );
}

export default CommanCard;
