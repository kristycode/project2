import React, { useState } from "react";
// import ReactDOM form "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// import "./App.css";
// import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from "./components/main";
// import { Link } from 'react-router-dom';
import { Grid } from "@material-ui/core";
import Header from "./components/Header";
import { BeautyBagProvider } from "./utils/beautyBagContext";
// import Body from "./components/Body/index.jsx";
// import CreateLook from "./components/createLook";
import ChipContext from "./components/Context/ChipContext";

function App() {
  const [chipObj, setChipObj] = useState([]);
  return (
    <ChipContext.Provider>
      <Router>
        <Grid container direction="column">
          <Grid item>
            <Header />
          </Grid>
          <Grid item container justify="center">
            <Grid item sm={2} />
            <Grid item xs={12} sm={8}>
              <Main />
            </Grid>
          </Grid>
        </Grid>
      </Router>
    </ChipContext.Provider>
  );
}

export default App;
