import React, { useEffect, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import {
    TableCell,
    IconButton,
    Toolbar,
    Container,
    Tooltip
} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import MyTable from "../MyTable";
import { CarContext } from "../../contexts/CarContext";
import { getCars } from "../../actions/carActions"

const Dashboard = (props) => {
    const { dispatch, state } = useContext(CarContext);
    const classes = useStyles();
    let history = useHistory();
    useEffect(() => {
      getCars(dispatch);
    }, []);
    
    const getTableCells = (row, labelId) => {
        return (
            <>
                <TableCell
                    align="center"
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="default"
                >
                    {row.make}
                </TableCell>
                <TableCell
                    align="center"
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="default"
                >
                    {row.model}
                </TableCell>
                <TableCell
                    align="center"
                    component="th"
                    id={labelId}
                    scope="row"
                    padding="default"
                >
                    {row.horsepower}
                </TableCell>
                <TableCell align="center">
                    <Tooltip title="Edit Car">
                        <IconButton
                            onClick={() => history.push(`/cars/editCar/${row.id}`)}
                        >
                            <EditIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Car">
                        <IconButton
                            onClick={() => history.push(`/cars/deleteCar/${row.id}`)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </TableCell>
            </>
        );
    };
    return (
        <main className={classes.content}>
            <Toolbar />
            <Container maxWidth="lg" className={classes.container}>
                <MyTable
                    rows={state.cars}
                    tableTitle="Cars"
                    headCells={headCells}
                    url={`/cars/addCar`}
                    getTableCells={getTableCells}
                />
            </Container>
        </main>

    );
};

export default Dashboard;

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

const headCells = [
    {
        id: "make",
        numeric: false,
        disablePadding: true,
        label: "Make"
    },
    {
        id: "model",
        numeric: false,
        disablePadding: true,
        label: "Model",
    },
    {
        id: "horsepower",
        numeric: true,
        disablePadding: false,
        label: "HorsePower",
    },
    {
        id: "actions",
        numeric: false,
        disablePadding: false,
        label: "Actions"
    },
];