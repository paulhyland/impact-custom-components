import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import NuvSelect from "./Components/NuvSelect";
import NuvText from "./Components/NuvText";
import selectOptions from "./Data/selectOptions";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: theme.spacing.unit * 2
  },
  field: {
    width: "100%"
  }
});

class Examples extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.state = {
      instructionsDisplay: [false, false, false, false, false, false],
      isActive: [false, false, false, false, false, false]
    };
  }

  handleInputClick(i) {
    let instructionsDisplay = this.state.instructionsDisplay.slice();
    let isActive = this.state.isActive.slice();

    if (!instructionsDisplay[i]) {
      instructionsDisplay.fill(false);
      if (!isActive[i]) {
        instructionsDisplay[i] = true;
      }
    }
    isActive.fill(false);
    isActive[i] = true;
    this.setState({ instructionsDisplay: instructionsDisplay });
    this.setState({ isActive: isActive });
  }

  handleCloseClick(i) {
    let instructionsDisplay = this.state.instructionsDisplay.slice();
    instructionsDisplay.fill(false);
    this.setState({ instructionsDisplay: instructionsDisplay });
  }

  render() {
    const { classes } = this.props;
    const { instructionsDisplay } = this.state;
    const { isActive } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.field}>
          <NuvSelect
            name="program"
            label="Single Program Long - Given the goals, objectives, etc. present within your plan, please describe your progress to date at specific levels. Are there any goals that have been completed? Objectives in which you have been successful?"
            isRequired={true}
            options={selectOptions}
            onInputClick={() => this.handleInputClick(0)}
            onCloseClick={() => this.handleCloseClick(0)}
            displayInstructions={instructionsDisplay[0]}
            isActive={isActive[0]}
            instructions="Instructions: Here are some instructions for the first - 
            select a program from the drop-down list."
          />
        </div>
        <div className={classes.field}>
          <NuvSelect
            name="programs"
            label="Multi Programs"
            isMulti={true}
            options={selectOptions}
            onInputClick={() => this.handleInputClick(1)}
            onCloseClick={() => this.handleCloseClick(1)}
            isActive={isActive[1]}
            displayInstructions={instructionsDisplay[1]}
            instructions={[
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
              "",
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            ]}
          />
        </div>
        <div className={classes.field}>
          <NuvSelect
            name="programsb"
            label="Multi Programs Error (600 wide)"
            isMulti={true}
            isRequired={true}
            width={600}
            options={selectOptions}
            onInputClick={() => this.handleInputClick(2)}
            onCloseClick={() => this.handleCloseClick(2)}
            displayInstructions={instructionsDisplay[2]}
            isActive={isActive[2]}
            instructions="Instructions: Here are some instructions for the second - 
            select one or more programs from the drop-down list. Required."
          />
        </div>
        <div className={classes.field}>
          <NuvText
            name="textinput"
            label="TextField with maxLength 20 - with validation error, also no instructions."
            width="100%"
            maxLength="20"
            isError={true}
            errorMessage="didn't pass validation"
            onInputClick={() => this.handleInputClick(3)}
            onCloseClick={() => this.handleCloseClick(3)}
            displayInstructions={instructionsDisplay[3]}
            isActive={isActive[3]}
          />
        </div>
        <div className={classes.field}>
          <NuvText
            name="textinput"
            label="TextField Shrink Long - Given the goals, objectives, etc. present within your plan, please describe your progress to date at specific levels. Are there any goals that have been completed? Objectives in which you have been successful?"
            width="100%"
            onInputClick={() => this.handleInputClick(4)}
            onCloseClick={() => this.handleCloseClick(4)}
            displayInstructions={instructionsDisplay[4]}
            isActive={isActive[4]}
            isError={false}
            isRequired={true}
            instructions={[
              "When answering the question please:",
              "- Do this",
              "- Also do this",
              "- Make sure to do this",
              "",
              "Try another paragraph here."
            ]}
          />
        </div>
        <div className={classes.field}>
          <NuvText
            name="multilinetextinput"
            label="Multiline TextField"
            width="100%"
            multiline={true}
            onInputClick={() => this.handleInputClick(5)}
            onCloseClick={() => this.handleCloseClick(5)}
            displayInstructions={instructionsDisplay[5]}
            isActive={isActive[5]}
            instructions="Here is a text field. Here is a text field. Here is a text field. 
            Here is a text field. Here is a text field. Here is a text field. Here is a text field. 
            Here is a text field.Here is a text field.Here is a text field."
          />
        </div>
      </div>
    );
  }
}

Examples.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Examples);
