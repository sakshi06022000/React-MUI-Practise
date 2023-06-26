import {
  Typography,
  // Button, 
  // TextField,
  AppBar,
  Button,
  Toolbar,
  Tab,
  Tabs
} from "@mui/material";
import Form from "./components/Form";
import { useState } from "react";
import Cards from "./components/Cards";
import Modal from "./components/Modals";
import Containers from "./components/Containers";
import ListComponents from "./components/ListComponents";
import Accord from "./components/Accord";
import DrawerMenu from "./components/DrawerMenu";
import Responsive from "./components/Responsive";

function App() {
  const [value,setValue]=useState(0)
  return (
    <>

      <AppBar>
        <Toolbar>
          <Typography variant="h2">LOGO</Typography>
          {/* <Button variant="contained" color="success" sx={{marginLeft : "auto"}}>Sign In */}
          <Tabs
          value={value}
          onChange={(e,value)=>setValue(value)}
            sx={{ marginLeft: ' auto' }}
            textColor="inherit"
            indicatorColor="secondary"
            >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
          {/* </Button> */}
        </Toolbar>
      </AppBar>
      <div style={{marginTop : 100}}>
        {/* <Cards/> */}
      </div>
      {/* <Modal></Modal> */}
      {/* <Containers/> */}
      {/* <ListComponents/> */}
      {/* <Accord/> */}
      {/* <DrawerMenu/> */}
      <Responsive/>
      {/* <Typography variant="h1" sx={{ color: 'red' }}>
        Techinfo
      </Typography> */}
      {/* <Form/> */}

      {/* <Button variant="contained" color="success" sx={{ margin: "30px" }}>Click me</Button>
      <Button variant="text">Click me</Button>
      <Button
        variant="outlined"
        onClick={() => alert('you clicked')}>
        Click me for action</Button>
      <br />
      <br />
      {/* <input type="text" placeholder="name"></input> */}
      {/* <TextField
        type="text"
        placeholder="name"
        variant="standard"
        
      />
      <TextField
        type="text"
        placeholder="name"
        variant="outlined"
        sx={{ margin: '30px' }}
      />
      <TextField
        type="text"
        placeholder="name"
        variant="filled"
        sx={{ margin: '30px' }}
      /> */}
      {/* <h1>MUI tutorial</h1> */}
      {/* <p>MUI offers a comprehensive suite of UI tools to help you ship new features faster. Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.</p> */}
    </>
  );
}

export default App;
