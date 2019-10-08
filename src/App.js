import React from "react";
import { MuiThemeProvider, withStyles } from "@material-ui/core/styles";
import PlanReviewDemo from "./PlanReviewDemo";
import CssBaseline from "@material-ui/core/CssBaseline";
import "typeface-roboto";
import theme from "./theme.js";

const styles = theme => ({
  root: {
    textAlign: "center",
    backgroundColor: theme.palette.background.default
  }
});

class App extends React.Component {
  render() {
    return (
      <div dir={theme.direction}>
        <CssBaseline />
        <MuiThemeProvider theme={theme}>
          <PlanReviewDemo />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
