import React, { Component } from "react";
import PropTypes from "prop-types";
import CheckboxItem from "./CheckboxItem";

class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleCheckboxChange = (isChecked, index) => {
    const { checkboxes } = this.props;
    const { onCheckboxGroupChange } = this.props;
    const newCheckState = checkboxes.map((aCheckbox, i) =>
      index === i ? { ...aCheckbox, checked: isChecked } : aCheckbox
    );
    onCheckboxGroupChange(newCheckState);
  };

  renderCheckboxes = () => {
    const { checkboxes, name } = this.props;
    if (!checkboxes) {
      return null;
    }
    return checkboxes.map((aCheckbox, index) => (
      <CheckboxItem
        key={index}
        name={name}
        checkboxLabel={aCheckbox.label}
        checkboxValue={aCheckbox.value}
        checked={aCheckbox.checked}
        disabled={aCheckbox.disabled}
        checkboxChangeCallback={checkStatus =>
          this.handleCheckboxChange(checkStatus, index)
        }
      />
    ));
  };

  render() {
    return <div>{this.renderCheckboxes()}</div>;
  }
}

CheckboxGroup.propTypes = {
  checkboxes: PropTypes.array.isRequired,
  onCheckboxGroupChange: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default CheckboxGroup;
