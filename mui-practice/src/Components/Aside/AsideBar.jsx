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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck'; // Example icon 1
import UpdateIcon from '@mui/icons-material/Update'; // Example icon 2
import CreditCardIcon from '@mui/icons-material/CreditCard'; // Example icon 3
import ContactMailIcon from '@mui/icons-material/ContactMail'; // Example icon 4
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'; // Example icon 5
import RequestQuoteIcon from '@mui/icons-material/RequestQuote'; // Example icon 6
import HomeIcon from '@mui/icons-material/Home';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'; // Mobile App Icon
import FeedbackIcon from '@mui/icons-material/Feedback'; 

export default function AsideBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const items1 = ['Account Section', 'Network Banking', ' Kyc Update', 'Apply For Credit Card'];
  
  const icons1 = [
    <AccountCircleIcon />,   
    <NetworkCheckIcon />, 
    <UpdateIcon />,          
    <CreditCardIcon />       
  ];

  
  const items2 = ['Contact Us', 'Home Branch', 'Loans', 'Account Statement','Mobile App','FeedBack'];
  
  const icons2 = [
    <ContactMailIcon />,  
    <HomeIcon />,         
    <RequestQuoteIcon />,   
    <AccountBalanceIcon />,
    <PhoneAndroidIcon />,   
    <FeedbackIcon /> 
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      {/* First List */}
      <List>
        {items1.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icons1[index]} 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      {/* Second List */}
      <List>
        {items2.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icons2[index]} 
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
