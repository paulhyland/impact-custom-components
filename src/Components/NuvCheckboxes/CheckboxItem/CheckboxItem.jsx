import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const styles = theme => ({
  root: {
    color: theme.palette.primary.main,
    "&$checked": {
      color: theme.palette.primary.light
    }
  },
  checked: {},
  label: {
    marginRight: theme.spacing.unit * 4
  }
});

class CheckboxItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCheckboxChange = event => {
    const { checkboxChangeCallback } = this.props;
    checkboxChangeCallback(event.target.checked);
  };

  render() {
    const {
      classes,
      checkboxValue,
      checkboxLabel,
      checked,
      disabled,
      name
    } = this.props;
    return (
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            checked={checked}
            disabled={disabled}
            onChange={this.handleCheckboxChange}
            value={checkboxValue}
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
          />
        }
        label={checkboxLabel}
        className={classes.label}
      />
    );
  }
}

export default withStyles(styles)(CheckboxItem);

CheckboxItem.propTypes = {
  classes: PropTypes.object.isRequired,
  checkboxLabel: PropTypes.string.isRequired,
  checkboxValue: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  handleCheckboxChange: PropTypes.func,
  name: PropTypes.string
};
CheckboxItem.defaultProps = {
  handleCheckboxChange: null,
  disabled: false
};
