import React from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import RootRef from "@material-ui/core/RootRef";
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
  }
});

class NuvNumeric extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: props.active,
      id: props.id || props.name, // id value must be unique on page
      theme: props.theme,
      classes: props.classes,
      displayInstructions: false,
      isError: props.isError,
      errorMessage: props.errorMessage,
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    if (isNaN(event.target.value)) {
      this.setState({ errorMessage: "Value must be a number." });
      this.setState({ isError: true });
    } else {
      this.setState({ isError: false });
      this.setState({ value: event.target.value });
    }
  }

  render() {
    const { value } = this.state;
    const { classes } = this.props;
    const { theme } = this.props;
    const { name } = this.props;
    const { id } = this.state;
    const { isRequired } = this.props;
    const { isError } = this.state;
    const { label } = this.props;
    const { width } = this.props;
    const { maxLength } = this.props;
    const { placeholder } = this.props;
    const { instructions } = this.props;
    const { errorMessage } = this.state;
    const { displayInstructions } = this.props;
    const { isActive } = this.props;

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
                <FormLabel
                  htmlFor={id}
                  required={isRequired}
                  className={classes.formLabel}
                >
                  {label}
                </FormLabel>
              </RootRef>
              <Input
                id={id}
                name={name}
                required={isRequired}
                placeholder={placeholder}
                inputProps={{
                  maxLength: maxLength
                }}
                onFocus={() => this.props.onInputClick()}
                value={value}
                onChange={this.handleChange}
                classes={{
                  underline: classes.inputUnderline
                }}
              />

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

NuvNumeric.propTypes = {
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
  maxLength: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NuvNumeric.defaultProps = {
  isRequired: false,
  isError: false,
  width: 500,
  displayInstructions: false,
  isActive: false,
  instructions: "",
  placeholder: ""
};

export default withTheme()(withStyles(styles)(NuvNumeric));
