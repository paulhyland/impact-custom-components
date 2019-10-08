import React from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import RootRef from "@material-ui/core/RootRef";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Instructions from "./Instructions.js";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "left",
    flexDirection: "column"
  },
  grow: {
    flexGrow: 2,
    minWidth: 48
  },
  inputArea: {
    display: "flex",
    flexGrow: 1,
    margin: theme.spacing.unit,
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3.5,
      marginRight: theme.spacing.unit * 3.5,
      width: "auto"
    },
    color: theme.palette.text.primary
  },
  inputUnderline: {
    borderBottomColor: theme.palette.primary.main,
    "&:focus": {
      borderBottomColor: theme.palette.primary.main
    },
    "&:hover  ": {
      borderBottomColor: theme.palette.primary.main
    }
  },
  singleInputField: {
    border: "0px solid",
    fontFamily: theme.typography.fontFamily,
    fontSize: 14,
    padding: "6px 0 7px",
    width: 500
  },
  rangeArea: {
    display: "flex",
    flexDirection: "row"
  },
  rangePickers: {
    marginRight: 30
  },
  rangeInputField: {
    border: "0px solid",
    fontFamily: theme.typography.fontFamily,
    fontSize: 14,
    padding: "6px 7px",
    width: 220
  },
  calendar: {
    zIndex: 2
  },
  formLabel: {
    marginLeft: theme.spacing.unit * 0.5,
    marginBottom: theme.spacing.unit
  },
  formHelperText: {
    marginLeft: theme.spacing.unit * 0.5,
    marginTop: theme.spacing.unit
  }
});

class NuvDatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id || props.name, // id value must be unique on page
      startDate: null,
      endDate: null,
      minDate: null,
      maxDate: null,
      displayInstructions: false
    };

    if (props.startDate) {
      if (props.startDate.toLowerCase() === "today") {
        this.state.startDate = new Date();
      } else {
        this.state.startDate = new Date(props.startDate);
      }
    }

    if (props.endDate) {
      if (props.endDate.toLowerCase() === "today") {
        this.state.endDate = new Date();
      } else {
        this.state.endDate = new Date(props.endDate);
      }
    }

    if (props.minDate) {
      if (props.minDate.toLowerCase() === "today") {
        this.state.minDate = new Date();
      } else {
        this.state.minDate = new Date(props.minDate);
      }
    }

    if (props.maxDate) {
      if (props.maxDate.toLowerCase() === "today") {
        this.state.maxDate = new Date();
      } else {
        this.state.maxDate = new Date(props.maxDate);
      }
    }

    console.log(this.state.minDate);

    this.handleChangeStart = this.handleChangeStart.bind(this);
    this.handleChangeEnd = this.handleChangeEnd.bind(this);
  }

  handleChangeStart(date) {
    this.setState({
      startDate: date
    });
  }

  handleChangeEnd(date) {
    this.setState({
      endDate: date
    });
  }

  render() {
    const { classes } = this.props;
    const { theme } = this.props;
    const { name } = this.props;
    const { id } = this.state;
    const { isRequired } = this.props;
    const { isError } = this.props;
    const { label } = this.props;
    const { width } = this.props;
    const { placeholder } = this.props;
    const { instructions } = this.props;
    const { errorMessage } = this.props;
    const { displayInstructions } = this.props;
    const { isActive } = this.props;
    const { dateRange } = this.props;
    const { startDate, endDate, minDate, maxDate } = this.state;

    return (
      <div
        className={classes.root}
        style={{
          backgroundColor: isActive
            ? theme.palette.secondary.lightbackground
            : theme.palette.common.white
        }}
      >
        <React.Fragment>
          <div className={classes.inputArea}>
            <FormControl
              error={isError}
              style={{
                width: width,
                paddingTop: 10
              }}
            >
              <RootRef
                rootRef={node => {
                  this.anchorEl = node;
                }}
              >
                <FormLabel htmlFor={id} required={isRequired}>
                  {label}
                </FormLabel>
              </RootRef>

              {dateRange ? (
                <div className={classes.rangeArea}>
                  <div className={classes.rangePickers}>
                    <Input
                      inputComponent={DatePicker}
                      name={name}
                      id={id}
                      required={isRequired}
                      onFocus={() => this.props.onInputClick()}
                      classes={{
                        underline: classes.inputUnderline
                      }}
                      inputProps={{
                        selected: startDate,
                        onChange: this.handleChangeStart,
                        className: classes.rangeInputField,
                        calendarClassName: classes.calendar,
                        selectsStart: true,
                        placeholder: placeholder,
                        minDate: minDate,
                        maxDate: maxDate,
                        startDate: startDate,
                        endDate: endDate
                      }}
                    />
                  </div>

                  <div className={classes.rangePickers}>
                    <Input
                      inputComponent={DatePicker}
                      name={name}
                      id={id}
                      required={isRequired}
                      onFocus={() => this.props.onInputClick()}
                      classes={{
                        underline: classes.inputUnderline
                      }}
                      inputProps={{
                        selected: endDate,
                        onChange: this.handleChangeEnd,
                        className: classes.rangeInputField,
                        calendarClassName: classes.calendar,
                        placeholder: placeholder,
                        selectsEnd: true,
                        minDate: minDate,
                        maxDate: maxDate,
                        startDate: startDate,
                        endDate: endDate
                      }}
                    />
                  </div>
                </div>
              ) : (
                <Input
                  inputComponent={DatePicker}
                  name={name}
                  id={id}
                  required={isRequired}
                  onFocus={() => this.props.onInputClick()}
                  classes={{
                    underline: classes.inputUnderline
                  }}
                  inputProps={{
                    selected: startDate,
                    onChange: this.handleChangeStart,
                    className: classes.singleInputField,
                    calendarClassName: classes.calendar,
                    placeholder: placeholder,
                    minDate: minDate,
                    maxDate: maxDate
                  }}
                />
              )}

              {isError ? (
                <FormHelperText error={true}>{errorMessage}</FormHelperText>
              ) : null}

              {//only show instructions if they exist
              instructions ? (
                <Instructions
                  instructions={instructions}
                  open={displayInstructions}
                  id={id}
                  anchorEl={this.anchorEl}
                  onClick={() => this.props.onCloseClick()}
                  styles={{
                    root: {
                      position: "relative"
                    }
                  }}
                />
              ) : null}
            </FormControl>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

NuvDatePicker.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  onInputClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  instructions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  displayInstructions: PropTypes.bool,
  isActive: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  minDate: PropTypes.string,
  maxDate: PropTypes.string,
  dateRange: PropTypes.bool
};

// Value of "today" for start, end, min, or max will use today's date. Anything else should be javascript-parsable dates.

NuvDatePicker.defaultProps = {
  isRequired: false,
  isError: false,
  width: 500,
  displayInstructions: false,
  isActive: false,
  startDate: null,
  endDate: null,
  minDate: null,
  maxDate: null,
  dateRange: false,
  instructions: "",
  placeholder: ""
};

export default withTheme()(withStyles(styles)(NuvDatePicker));
