import React, { Component } from "react";
import CheckboxGroup from "./CheckboxGroup";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import RootRef from "@material-ui/core/RootRef";
import FormHelperText from "@material-ui/core/FormHelperText";
import Instructions from "../Instructions.js";

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
    marginTop: theme.spacing.unit * 2.5,
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3.5,
      marginRight: theme.spacing.unit * 3.5,
      width: "auto"
    }
  }
});

class CheckboxGroupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: props.checkboxes,
      id: props.id || props.name // id value must be unique on page
    };
  }

  handleCheckboxgroupChange = updatedUsecaseCBState => {
    this.setState({
      checkboxes: updatedUsecaseCBState
    });
  };

  render() {
    const {
      classes,
      theme,
      width,
      name,
      groupLabel,
      row,
      isRequired,
      isError,
      isActive,
      errorMessage,
      instructions,
      displayInstructions
    } = this.props;
    const { id } = this.state;
    const arrayName = name + "[]";

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
              component="fieldset"
              onFocus={() => this.props.onInputClick()}
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
                  component="legend"
                  htmlFor={id}
                  required={isRequired}
                >
                  {groupLabel}
                </FormLabel>
              </RootRef>
              <FormGroup row={row}>
                <CheckboxGroup
                  checkboxes={this.state.checkboxes}
                  onCheckboxGroupChange={this.handleCheckboxgroupChange}
                  name={arrayName}
                />
              </FormGroup>
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

CheckboxGroupContainer.propTypes = {
  onInputClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  checkboxes: PropTypes.array.isRequired,
  row: PropTypes.bool,
  isRequired: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  isActive: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  groupLabel: PropTypes.string,
  instructions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  displayInstructions: PropTypes.bool,
  width: PropTypes.number
};

CheckboxGroupContainer.defaultProps = {
  isRequired: false,
  isError: false,
  isActive: false,
  width: "100%",
  instructions: "",
  row: true
};

export default withTheme()(withStyles(styles)(CheckboxGroupContainer));
