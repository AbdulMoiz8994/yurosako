import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import navigation from "../../assests/Yurosako/Navigation-Logo.png"
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import twitter from "../../assests/Social media/Twitter2.png";
import instagram from "../../assests/Social media/Instagram2.png";
import discord from "../../assests/Social media/Discord2.png";
import "./scss/index.scss";


export const Sidebar = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //   const list = (anchor) => (
  //     <Box
  //       sx={{ width:300 }}
  //       role="presentation"
  //       onClick={toggleDrawer(anchor, false)}
  //       onKeyDown={toggleDrawer(anchor, false)}
  //     >
  //       <List>
  //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //           <ListItem key={text} disablePadding>
  //             <ListItemButton>
  //               <ListItemIcon>
  //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //               </ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //           <ListItem key={text} disablePadding>
  //             <ListItemButton>
  //               <ListItemIcon>
  //                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //               </ListItemIcon>
  //               <ListItemText primary={text} />
  //             </ListItemButton>
  //           </ListItem>
  //         ))}
  //       </List>
  //     </Box>
  //   );

 


  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="sideb-btn">
            {/* <IconButton> */}
            <MenuIcon style={{ color: "white" }} />
            {/* </IconButton> */}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {/* {list(anchor)} */}
            <Box sx={{ width: 300 }} role="presentation" className="boxes">
              <div className="flex justify-between w-full my-4">
                <img src={navigation} alt="navigation"   width={"140px"} height="120px"/>
                <button onClick={toggleDrawer(anchor, false)} className="cross-btn">
                  <CloseIcon />
                </button>

              </div>
              <ul className="sidebar-ul mt-8">
                <li>Home</li>
                <Divider />

                <li>Story</li>
                <Divider />
                <li>Customize</li>
                <Divider />

                <li>Roadmap</li>
                <Divider />

                <li>manga</li>
                <Divider />

                <li>Whitepaper</li>
                <Divider />
                <li>Faq</li>
                <Divider />
                <li>Shop</li>
                <Divider />
              </ul>
              <Box className="social-meida-sidebar">
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="twitter" />
                <img src={discord} alt="twitter" />
              </Box>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};
