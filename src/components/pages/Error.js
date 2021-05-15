import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {
    Typography,
    Button,
    Toolbar,
    Container,
} from "@material-ui/core";

import { CarContext } from "../../contexts/CarContext";
import { clearError } from "../../actions/carActions"

const Error = () => {
    const { dispatch, state } = useContext(CarContext);
    const classes = useStyles();
    let history = useHistory();

    return (
        <main className={classes.content}>
            <Toolbar />
            <Container maxWidth="lg" className={classes.container}>
                <Typography variant="h2" component="h1" gutterBottom>
                    {state.error}
                </Typography>

                <Button onClick={() => {
                    clearError(dispatch)
                    history.push('/cars')
                }}> {'Go back to safety...'}</Button>
            </Container>
        </main>
    );
};

export default Error;

const useStyles = makeStyles((theme) => ({
    content: {
        flexGrow: 1,
        height: "100%",
        overflow: "auto",
    },
    container: {
        paddingTop: "2rem",
        paddingBottom: "2rem",
    },
}));
