import React from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
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
    marginTop: theme.spacing.unit * 2.5,
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3.5,
      marginRight: theme.spacing.unit * 3.5,
      width: "auto"
    }
  },
  formControl: {
    margin: theme.spacing.unit * 3
  },
  group: {
    margin: 0 //`${theme.spacing.unit}px 0`
  },
  formHelperText: {
    marginLeft: theme.spacing.unit * 0.5,
    marginTop: theme.spacing.unit
  },
  itemLabel: {
    marginRight: theme.spacing.unit * 4
  },
  itemButton: {
    padding: "8px 8px 8px 12px"
  }
});

class NuvRadioButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      radioButtons: props.radioButtons,
      id: props.id || props.name,
      value: null // id value must be unique on page
    };
  }

  handleChange = event => {
    // meed to set an empty array of checked values, then set event.target.checked to true, then setstate that?
    this.setState({ value: event.target.value });
  };

  renderRadioButtons = () => {
    const { radioButtons, classes } = this.props;
    if (!radioButtons) {
      return null;
    }
    return radioButtons.map((aRadioButton, index) => (
      <FormControlLabel
        key={index}
        label={aRadioButton.label}
        value={aRadioButton.value}
        checked={aRadioButton.checked}
        disabled={aRadioButton.disabled}
        control={<Radio color="primary" className={classes.itemButton} />}
        className={classes.itemLabel}
      />
    ));
  };

  componentDidMount() {
    const { radioButtons } = this.props;
    if (!radioButtons) {
      return null;
    }
    radioButtons.map((aRadioButton, index) => {
      if (aRadioButton.checked) {
        this.setState({ value: aRadioButton.value });
      }
    });
  }

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

    return (
      <div
        className={classes.root}
        style={{
          backgroundColor: isActive
            ? theme.palette.secondary.lightbackground
            : theme.palette.common.white
        }}
      >
        <div className={classes.inputArea}>
          <FormControl
            component="fieldset"
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
              <FormLabel component="legend" htmlFor={id} required={isRequired}>
                {groupLabel}
              </FormLabel>
            </RootRef>

            <RadioGroup
              aria-label={groupLabel}
              name={name}
              row={row}
              className={classes.group}
              value={this.state.value}
              onChange={this.handleChange}
              onFocus={this.props.onInputClick}
            >
              {this.renderRadioButtons()}
            </RadioGroup>

            {isError ? (
              <FormHelperText className={classes.formHelperText} error={true}>
                {errorMessage}
              </FormHelperText>
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
      </div>
    );
  }
}

NuvRadioButtons.propTypes = {
  onInputClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  radioButtons: PropTypes.array.isRequired,
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

NuvRadioButtons.defaultProps = {
  isRequired: false,
  isError: false,
  isActive: false,
  width: "100%",
  instructions: "",
  row: false
};

export default withTheme()(withStyles(styles)(NuvRadioButtons));
