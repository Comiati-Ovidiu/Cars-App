import React, { useContext } from "react";
import { makeStyles, darken } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Box,
  Button
} from "@material-ui/core";
import RestoreIcon from '@material-ui/icons/Restore';
import { CarContext } from "../contexts/CarContext";
import { resetDB } from "../actions/carActions"
const Header = (props) => {
  const classes = useStyles();
  const { dispatch, state } = useContext(CarContext);
  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.header}>
          <Box className={classes.title}>Cars app</Box>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<RestoreIcon />}
            onClick={() => resetDB(dispatch)}
          >
            Restore DB
      </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    color: darken(theme.palette.secondary.main, 0.2),
    background: "white",
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    color: theme.palette.primary.main,
    fontSize: theme.typography.h3.fontSize,
    fontWeight: "bold",
    margin: "0.5rem"
  }
}));

export default Header;
