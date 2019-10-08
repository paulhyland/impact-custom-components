import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  direction: "ltr",
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#00665e"
    },
    secondary: {
      main: "#f9be00",
      light: "#fcde7f",
      background: "rgba(249,190,0,0.30)",
      lightbackground: "rgba(249,190,0,0.10)"
    },
    action: {
      active: "rgba(249,190,0, 0.54)",
      hover: "rgba(249,190, 0, 0.36)",
      hoverOpacity: 0.08,
      selected: "rgba(249,190, 0, 0.18)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)"
    },
    error: {
      main: "#d8180e"
    }
  },
  overrides: {
    MuiInput: {
      root: {
        fontSize: ".875em"
      },
      formControl: {
        marginTop: "0px !important"
      }
    },
    MuiFormControl: {
      root: {
        padding: "10px 0"
      }
    },
    MuiFormLabel: {
      root: {
        color: "rgba(0, 0, 0, 1)",
        fontSize: ".938em",
        lineHeight: 1.325,
        fontWeight: 500
      }
    },
    MuiInputLabel: {
      root: {
        color: "rgba(0, 0, 0, 0.72)"
      },
      shrink: {
        transform: "translate(0, 1.5px) scale(0.875)",
        transformOrigin: "top left",
        fontWeight: 600
      },
      focused: {
        transform: "translate(0, 1.5px) scale(0.875)",
        transformOrigin: "top left",
        fontWeight: 600
      },
      outlined: {
        shrink: {
          transform: "translate(0, 1.5px) scale(0.875)",
          transformOrigin: "top left",
          fontWeight: 600
        }
      }
    },
    MuiFormHelperText: {
      root: {
        color: "rgba(0, 0, 0, 0.72)",
        fontSize: "0.875rem",
        lineHeight: 1.25,
        margin: "5px 0"
      }
    },
    LeftNav: {
      drawerDiv: {
        backgroundColor: "#00665e",
        width: 300
      }
    }
  }
});

export default theme;
