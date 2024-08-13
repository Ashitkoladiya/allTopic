import React from "react";
import { Avatar, Box, Card } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const CardDetail = (props) => {
     const {
          cardstyle,
          avtarstyle,
          cardTitleStyle,
          avtar,
          cardTitle,
          cardDate,
          onClick,
          moreDetailIcon,
          cardImage,
          cardDescription,
          likeIcon,
          shereIcon,
          collapesIcon,
          cardDateStyle,
          cardImageWrapperStyle,
          moreDetailIconStyle,
          cardDescriptionStyle,
          likeIconStyle,
          shereIconStyle,
          collapesIconStyle,
          mainFooterLikeShereIconStyle,
          footerIconWrapper,
          mainCardWrapperStyle,
          cardImageStyle,
          avtarOnClick,
          moreIconHandleClick,
          moreIconId,
          moreIconAriaControls,
          moreIconAriaHaspopup,
          moreIconAriaExpanded,
          handleHartClick,
     } = props;

     return (
          <>
               <Card sx={{ maxWidth: 345, width: "100%", height: "auto" }} style={cardstyle}>
                    <Box style={mainCardWrapperStyle}>
                         <Avatar
                              style={avtarstyle}
                              id={moreIconId}
                              aria-controls={moreIconAriaControls}
                              aria-haspopup={moreIconAriaHaspopup}
                              aria-expanded={moreIconAriaExpanded}
                              onClick={moreIconHandleClick}
                         >
                              {avtar}
                         </Avatar>
                         <Box>
                              <Box style={cardTitleStyle}>{cardTitle}</Box>
                              <Box style={cardDateStyle}>{cardDate}</Box>
                         </Box>
                         <Box
                              style={moreDetailIconStyle}
                              id={moreIconId}
                              aria-controls={moreIconAriaControls}
                              aria-haspopup={moreIconAriaHaspopup}
                              aria-expanded={moreIconAriaExpanded}
                              onClick={moreIconHandleClick}
                         >
                              {moreDetailIcon}
                         </Box>
                    </Box>

                    <Box>
                         <Box style={cardImageWrapperStyle}>
                              <img src={cardImage} style={cardImageStyle} />
                         </Box>
                         <Box style={cardDescriptionStyle}>{cardDescription}</Box>
                    </Box>
                    <Box style={footerIconWrapper}>
                         <Box style={mainFooterLikeShereIconStyle}>
                              <Box style={likeIconStyle} onClick={handleHartClick}>
                                   {likeIcon}
                              </Box>
                              <Box style={shereIconStyle}>{shereIcon}</Box>
                         </Box>
                         <Box style={collapesIconStyle}>{collapesIcon}</Box>
                    </Box>
               </Card>
               <div></div>
          </>
     );
};
