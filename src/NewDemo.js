import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import NuvSelect from "./Components/NuvSelect";
import NuvText from "./Components/NuvText";
import NuvNumeric from "./Components/NuvNumeric";
import NuvDatePicker from "./Components/NuvDatePicker";
import NuvRichText from "./Components/NuvRichText";
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

class NewDemo extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputClick = this.handleInputClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);
    this.state = {
      instructionsDisplay: [],
      isActive: []
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
          <NuvNumeric
            name="numeric"
            label="Numeric"
            instructions="Let's try numeric now."
            onInputClick={() => this.handleInputClick(2)}
            onCloseClick={() => this.handleCloseClick(2)}
            displayInstructions={instructionsDisplay[2]}
            isActive={isActive[2]}
          />
        </div>

        <div className={classes.field}>
          <NuvDatePicker
            name="date"
            label="Date (no component, just HTML 5)"
            instructions="Here's the HTML 5 native date picker."
            onInputClick={() => this.handleInputClick(3)}
            onCloseClick={() => this.handleCloseClick(3)}
            displayInstructions={instructionsDisplay[3]}
            isActive={isActive[3]}
          />
        </div>

        <div className={classes.field}>
          <NuvSelect
            name="program"
            label="Single Program - Required"
            isRequired={true}
            options={selectOptions}
            onInputClick={() => this.handleInputClick(0)}
            onCloseClick={() => this.handleCloseClick(0)}
            displayInstructions={instructionsDisplay[0]}
            isActive={isActive[0]}
          />
        </div>

        <div className={classes.field}>
          <NuvSelect
            name="programs"
            label="Multi Program - not required - for field height"
            isRequired={true}
            isMulti={true}
            options={selectOptions}
            onInputClick={() => this.handleInputClick(1)}
            onCloseClick={() => this.handleCloseClick(1)}
            displayInstructions={instructionsDisplay[1]}
            isActive={isActive[1]}
          />
        </div>

        <div className={classes.field}>
          <NuvText
            name="textinput"
            label="Required Text Long Label - Given the goals, objectives, etc. present within your plan, please describe your progress to date at specific levels. Are there any goals that have been completed? Objectives in which you have been successful?"
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
            width="100%"
            onInputClick={() => this.handleInputClick(4)}
            onCloseClick={() => this.handleCloseClick(4)}
            displayInstructions={instructionsDisplay[4]}
            isActive={isActive[4]}
          />
        </div>

        <div className={classes.field}>
          <NuvRichText
            name="rte"
            isRequired={true}
            label="This is a rich text editor. Also required to confirm that's turned off."
            instructions="Here are some instructions for the rich text editor."
            onInputClick={() => this.handleInputClick(6)}
            onCloseClick={() => this.handleCloseClick(6)}
            displayInstructions={instructionsDisplay[6]}
            isActive={isActive[6]}
          />
        </div>
      </div>
    );
  }
}

NewDemo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewDemo);
