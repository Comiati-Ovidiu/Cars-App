import server from "../api/server";
import {
  GET_CARS,
  GET_CAR,
  REMOVE_CAR,
  EDIT_CAR,
  ERROR,
  CLEAR_ERROR
} from "./types";

export const addCar = async (car, dispatch) => {
  const response = await server({
    url: "",
    method: "POST",
    data: { ...car, id: 0 },
  });
  if (response.status < 300 && response.status >= 200)
    getCars(dispatch)
};

export const removeCar = async (carId, dispatch) => {
  const response = await server({
    url: `/${carId}`,
    method: "DELETE",
  });

  if (response.status < 300 && response.status >= 200)
    dispatch({
      type: REMOVE_CAR,
      carId,
    });
};

export const editCar = async (carId, car, dispatch) => {
  const response = await server({
    method: "PUT",
    data: { ...car, id: carId },
  });
  if (response.status < 300 && response.status >= 200)
    dispatch({
      type: EDIT_CAR,
      carId,
      car,
    });
};

export const getCars = async (dispatch) => {
  const response = await server({
    method: "GET",
  }
  ).then((response) => {
    dispatch({
      type: GET_CARS,
      cars: response.data,
    });
  }).catch((error) => {
    dispatch({
      type: ERROR,
      message: "There has been an error!"
    });
  })
};

export const getCar = async (carId, dispatch) => {
  const response = await server({
    url: `/${carId}`,
    method: "GET",
  })
    .then((response) => {
      dispatch({
        type: GET_CAR,
        car: response.data,
      });
      return response.data
    }).catch((error) => {
      dispatch({
        type: ERROR,
        message: "There has been an error!"
      });
    })
};

export const clearError = (dispatch) => {
  dispatch({
    type: CLEAR_ERROR,
  });
}

export const resetDB = async (dispatch) => {
  const response = await server({
    url: `/reset`,
    method: "POST",
  });
  if (response.status < 300 && response.status >= 200)
    getCars(dispatch)
}
