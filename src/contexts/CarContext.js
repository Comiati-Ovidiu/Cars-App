import React, { createContext, useReducer } from "react";
import _ from "lodash";
import {
  GET_CARS,
  EDIT_CAR,
  GET_CAR,
  REMOVE_CAR,
  CLEAR_ERROR,
  ERROR
} from "../actions/types";

const initialState = {
  cars: [],
  error: null
};

export const CarContext = createContext(initialState);

const getCars = (state, cars) => {
  return { ...state, cars };
};

const getCar = (state, car) => {
  const index = _.findIndex(state.cars, { 'id': car.id });
  const newCars = state.cars
  newCars[index] = car
  return { ...state, cars: newCars };
};

const removeCar = (state, carId) => {
  const newCars = state.cars.filter(
    (car) => car.id !== carId
  );
  return { ...state, cars: newCars };
};

const editCar = (state, carId, car) => {
  const index = _.findIndex(state.cars, { 'id': carId });
  const newCars = state.cars
  newCars[index] = { ...car, id: carId }
  return { ...state, cars: newCars };
};

const getError = (state, message) => {
  return { ...state, error: message }
}

const clearError = (state) => {
  return { ...state, error: null }
}

const reducer = (state, action) => {
  switch (action.type) {
    case GET_CARS:
      return getCars(state, action.cars);
    case GET_CAR:
      return getCar(state, action.car);
    case REMOVE_CAR:
      return removeCar(state, action.carId);
    case EDIT_CAR:
      return editCar(state, action.carId, action.car);
    case ERROR:
      return getError(state, action.message);
    case CLEAR_ERROR:
      return clearError(state);
    default:
      return state;
  }
};

export const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};
