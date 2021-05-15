import React, { useContext, useEffect } from "react";
import { editCar, getCar } from "../../actions/carActions";
import { CarContext } from "../../contexts/CarContext"
import CarsForm from "../CarsForm";

const EditCar = (props) => {
  const { id } = props
  const { dispatch, state } = useContext(CarContext);
  let car = state.cars.find(element => element.id == id) || 
  {
    make: "",
    model: "",
    horsepower: "",
  };

  useEffect(async () => {
    car = await getCar(id, dispatch);
  }, []);

  const initialValues = {
    make: car.make,
    model: car.model,
    horsepower: car.horsepower,
  };
  const onSubmit = (values) => {
    editCar(id, values, dispatch);
  };
  return (
    <CarsForm
      id={id}
      initialValues={initialValues}
      closeUrl={`/cars`}
      onSubmit={onSubmit}
      title="Edit Car"
      subtitle="In here you can edit the selected Car"
    />
  );
};

export default EditCar;