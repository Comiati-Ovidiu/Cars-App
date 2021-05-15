import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let dashboardTheme = createMuiTheme({ });

dashboardTheme = responsiveFontSizes(dashboardTheme);

export default dashboardTheme;
