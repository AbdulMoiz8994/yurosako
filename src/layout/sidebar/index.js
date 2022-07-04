import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import twitter from "../../assests/Social media/Twitter2.png";
import  instagram from "../../assests/Social media/Instagram2.png";
import discord from "../../assests/Social media/Discord2.png";
import "./scss/index.scss";

export const  Sidebar=() => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
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
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {/* <IconButton> */}
            <MenuIcon style={{color: 'white',}} />
            {/* </IconButton> */}
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {/* {list(anchor)} */}
            <Box sx={{ width:300 }}
               role="presentation"
               className='boxes'
               >
              <button onClick={toggleDrawer(anchor, false)}>
                <CloseIcon />
                </button> 
              <ul className='sidebar-ul'>
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

                  <li>Shop</li>
                  <Divider />

                 </ul>
                 <Box className='social-meida-sidebar'>
                 <img src={twitter} alt='twitter'/>
                    <img src={instagram} alt='twitter'/>
                    <img src={discord} alt='twitter'/>
                 </Box>
            </Box>
            
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
