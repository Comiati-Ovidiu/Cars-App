import React, { useContext, useEffect } from "react";
import { addCar, getCars } from "../../actions/carActions";
import { CarContext } from "../../contexts/CarContext";
import CarsForm from "../CarsForm";

const AddCar = () => {
  const { dispatch, state } = useContext(CarContext);

  useEffect(() => {
    getCars(dispatch);
  }, []);

  const initialValues = {
    make: "",
    model: "",
    horsepower: "",
  };
  const onSubmit = (values) => {
    addCar(values, dispatch);
  };
  return (
    <CarsForm
      initialValues={initialValues}
      closeUrl={`/cars`}
      onSubmit={onSubmit}
      title="Add Car"
      subtitle="In here you can add a new car"
    />
  );
};

export default AddCar;