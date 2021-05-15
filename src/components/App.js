import React from "react"
import { BrowserRouter, Redirect } from "react-router-dom";
import _ from "lodash"
import {
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import Header from "./Header"
import DeleteCar from "./pages/DeleteCar"
import EditCar from "./pages/EditCar"
import AddCar from "./pages/AddCar"
import Dashboard from "./pages/Dashboard"
import Error from "./pages/Error";
import AppRoute from "../api/AppRoute"

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
        <>
        <Redirect from="/" to="/cars" />
        <AppRoute
            path="/cars"
            render={() => {
              return <Dashboard />
            }}
          />
          <AppRoute
           path="/cars/editCar/:id"
           render={(props) => {
             return <EditCar id={parseInt(props.match.params.id)} />
           }}
          />
           <AppRoute
           path="/cars/addCar"
           render={() => {
             return <AddCar />
           }}
          />
          <AppRoute
           path="/cars/deleteCar/:id"
           render={(props) => (<DeleteCar id={parseInt(props.match.params.id)} />)}
          />
          <AppRoute
           path="/error"
           render={(props) => (<Error />)}
          />
        </>
      </BrowserRouter>
    </div>
  )
}
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    height: "100%",
    position: "absolute"
  },
}));

export default App;
