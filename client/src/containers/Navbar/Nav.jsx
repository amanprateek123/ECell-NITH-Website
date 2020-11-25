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
import { Link, NavLink } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:'100%',
    position:'fixed',
    zIndex:100
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'skyblue'
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

  const [cls,setCls] = React.useState('')
  const listenScrollEvent = e => {
    if (window.scrollY > 50) {
      setCls("black")
    } else {
        setCls("")
    }
  }
  React.useEffect(()=>{
    window.addEventListener('scroll',listenScrollEvent)
  },[])

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  
  function hello() {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  const draw = ()=>(
    <div
      className="draw"
      role="presentation"
    >
       <List>
       <ListItem>
           <ListItemIcon style={{display:'flex',justifyContent:'center',width:'100%',height:'2em',alignItems:'center'}} >              
             <img src="https://ecellnith.org/images/ecell.png" style={{width:'60%'}} /> 
           </ListItemIcon>
         </ListItem>
         <Divider/>
         <ListItem>
           <NavLink onClick={toggleDrawer('left', false)} style={{textDecoration:'none',color:'black'}} to="/" ><ListItemText primary="Home" /></NavLink>
         </ListItem>
         <Divider/>
         <ListItem>
           <NavLink onClick={toggleDrawer('left', false)} style={{textDecoration:'none',color:'black'}} to="/initiatives" ><ListItemText primary="Initiatives" /></NavLink>
         </ListItem>
         <Divider/>
         <ListItem>
           <NavLink onClick={toggleDrawer('left', false)} style={{textDecoration:'none',color:'black'}} to="/partner" ><ListItemText primary="Partners" /></NavLink>
         </ListItem>
         <Divider/>
         <ListItem>
           <NavLink onClick={toggleDrawer('left', false)} style={{textDecoration:'none',color:'black'}} to="/blog" ><ListItemText primary="Blogs" /></NavLink>
         </ListItem>
         <Divider/>
         <ListItem>
           <NavLink onClick={toggleDrawer('left', false)} style={{textDecoration:'none',color:'black'}} to="/team" ><ListItemText primary="Teams" /></NavLink>
         </ListItem>
         <Divider/>
         <ListItem>
          <NavLink onClick={toggleDrawer('left', false)} style={{textDecoration:'none',color:'black'}} to="/gallery" ><ListItemText primary="Gallery" /></NavLink>
         </ListItem>
         <Divider/>
         <ListItem className="social_media" >
             <div><FacebookIcon fontSize="inherit" /></div> 
             <div><InstagramIcon fontSize="inherit" /></div>
             <div><LinkedInIcon fontSize="inherit" /></div> 
             <div><TwitterIcon fontSize="inherit" /></div> 
         </ListItem>
       </List>
    </div>
  )

  return (
    <div className={classes.root+" "+cls}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} id="menu" onClick={toggleDrawer('left', true)}  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Drawer anchor='left' open={state['left']} onClick={toggleDrawer('left', false)} >
            {draw()}
          </Drawer>
          <div className="nav_bar" >
            <div className="logo" >
            <img src="https://ecellnith.org/images/ecell.png" />
            </div>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'skyblue'}} to="/">Home</Link>
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'skyblue'}} to="/initiatives">Initiatives</Link>  
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'skyblue'}} to="/blog">Blogs</Link> 
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'skyblue'}} to="/partner">Partners</Link> 
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'skyblue'}} to="/team">Teams</Link>  
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'skyblue'}} to="/gallery">Gallery</Link>  
          </Typography>
          <Typography variant="h6" className='title'>
             <Link style={{textDecoration:'none',color:'skyblue'}} onClick={hello} to="/">Contact Us</Link>  
          </Typography>
          </div>
        </Toolbar>
      </AppBar>
     
    </div>
  );
}