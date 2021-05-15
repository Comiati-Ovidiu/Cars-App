import { React, useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import _ from "lodash";

import { CarContext } from "../../contexts/CarContext";
import { removeCar, getCar } from "../../actions/carActions"
import Modal from "../Modal";
import { Box } from "@material-ui/core";

const DeleteCar = (props) => {
  let history = useHistory();
  const { id } = props;
  const { state, dispatch } = useContext(CarContext);
  const [open, setOpen] = useState(true);
  let car = state.cars.find(element => element.id == id)  || {
    make: "",
    model: "",
    horsepower: "",
  };

  useEffect(async () => {
    car = await getCar(id, dispatch)
  }, [])

  const handleClose = () => {
    history.push(`/cars`);
    setOpen(false);
  };
  const handleDelete = () => {
    removeCar(id, dispatch);
  };

  const content = (
    <>
      <Box>Make: {car.make}</Box>
      <Box>Model: {car.model}</Box>
      <Box>HorsePower: {car.horsepower}</Box>
    </>
  );

  return (
    <div>
      <Modal
        open={open}
        title={"Delete Car"}
        subtitle={"Are you sure you want to delete this car from the system?"}
        content={content}
        handleClose={handleClose}
        handleAction={handleDelete}
        actionButtonText={"Delete"}
      />
    </div>
  );
};

export default DeleteCar;
