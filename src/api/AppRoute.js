import React, { useContext } from "react";
import { Route, useHistory } from "react-router-dom";

import { CarContext } from "../contexts/CarContext";

const AppRoutes = (props) => {
  const { render, path, ...rest } = props;
  const { state } = useContext(CarContext);
  let history = useHistory()
  return (
      <Route
        path={path}
        render={(props) => {
          if (Boolean(state.error) && path !== "/error") 
            history.push('/error')
          return render(props);
        }}
        {...rest}
      />
  );
};

export default AppRoutes;