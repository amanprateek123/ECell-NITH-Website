import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './Nav.scss'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const draw = ()=>(
    <div
      className="draw"
      role="presentation"
    >
       <List>
       <ListItem>
           <ListItemIcon style={{display:'flex',justifyContent:'flex-end',width:'100%',height:'2em',alignItems:'center'}} >
             <ChevronLeftIcon onClick={toggleDrawer('left', false)} fontSize="inherit" style={{fontSize:'35px',cursor:'pointer',fontWeight:'bold',color:'black'}}  /></ListItemIcon>
         </ListItem>
         <Divider/>
         <ListItem>
           <ListItemText primary="Home" />
         </ListItem>
         <Divider/>
         <ListItem>
           <ListItemText primary="Initiatives" />
         </ListItem>
         <Divider/>
         <ListItem>
           <ListItemText primary="Partners" />
         </ListItem>
         <Divider/>
         <ListItem>
           <ListItemText primary="Blogs" />
         </ListItem>
         <Divider/>
         <ListItem>
           <ListItemText primary="Teams" />
         </ListItem>
         <Divider/>
         <ListItem>
           <ListItemText primary="Gallery" />
         </ListItem>
         <Divider/>
       </List>
    </div>
  )

  return (
    <div className={classes.root} className="mainImg" >
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} id="menu" onClick={toggleDrawer('left', true)}  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor='left' open={state['left']}>
            {draw()}
          </Drawer>
          <div className="nav_bar" >
            <div className="logo" >
            <img src="https://ecellnith.org/images/ecell.png" />
            </div>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'white'}} to="/">Home</Link>
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'white'}} to="/initiatives">Initiatives</Link>  
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'white'}} to="/blog">Blogs</Link> 
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'white'}} to="/partner">Partners</Link> 
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'white'}} to="/team">Teams</Link>  
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'white'}} to="/gallery">Gallery</Link>  
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'white'}} to="/contact">Contact Us</Link>  
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <div className="mainCont" >
           <div className="container mx-auto" >
             <p className="main_text" >NATIONAL INSTITUTE OF TECHNOLOGY, HAMIRPUR</p>
              <Typography variant="h2" className="typo" >ENTREPRENEURSHIP CELL</Typography>
           </div>
      </div>
    </div>
  );
}