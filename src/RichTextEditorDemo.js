import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import NuvSelect from "./Components/NuvSelect";
import NuvText from "./Components/NuvText";
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

class RichTextEditorDemo extends React.Component {
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
          <NuvRichText
            name="rte"
            label="This is a rich text editor. Pretty cool, huh?"
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

RichTextEditorDemo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RichTextEditorDemo);
