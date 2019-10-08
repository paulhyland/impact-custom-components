import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import NuvSelect from "./Components/NuvSelect";
import NuvText from "./Components/NuvText";
import NuvNumeric from "./Components/NuvNumeric";
import NuvDatePicker from "./Components/NuvDatePicker";
import NuvRichText from "./Components/NuvRichText";
import FormHeader from "./Components/FormHeader";
import SectionHeader from "./Components/SectionHeader";
import NuvCheckboxes from "./Components/NuvCheckboxes";
import NuvRadioButtons from "./Components/NuvRadioButtons";
import selectOptions from "./Data/selectOptions";
import checkboxesData from "./Data/checkboxesData";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  header: {
    width: "100%",
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: theme.palette.common.white
  },
  field: {
    width: "100%"
  },
  formHeader: {
    width: "100%",
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor: theme.palette.common.white
  },
  sectionHeader: {
    width: "100%",
    paddingTop: theme.spacing.unit * 2,
    backgroundColor: theme.palette.common.white
  }
});

class PlanReviewDemo extends React.Component {
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
        <div className={classes.formHeader}>
          <FormHeader
            formHeaderTitle="Program Learning Assessment > Plan Review"
            instructions={[
              "When answering the question please:",
              "- Do this",
              "- Also do this",
              "- Make sure to do this",
              "",
              "Try another paragraph here.",
              "",
              "More longer instructions: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing."
            ]}
          />
        </div>
        <div className={classes.field}>
          <NuvSelect
            name="advancedProgramReviewCycle"
            label="Feedback Cycle"
            isRequired={true}
            options={selectOptions.feedbackCycle}
            onInputClick={() => this.handleInputClick(0)}
            onCloseClick={() => this.handleCloseClick(0)}
            displayInstructions={instructionsDisplay[0]}
            isActive={isActive[0]}
          />
        </div>

        <div className={classes.field}>
          <NuvDatePicker
            name="date"
            label="Date Submitted"
            instructions="Newfangled date picker single."
            onInputClick={() => this.handleInputClick(1)}
            onCloseClick={() => this.handleCloseClick(1)}
            displayInstructions={instructionsDisplay[1]}
            isActive={isActive[1]}
          />
        </div>

        <div className={classes.field}>
          <NuvDatePicker
            name="dates"
            label="Date's Accepted'"
            isRequired={true}
            instructions="Here's a date range."
            onInputClick={() => this.handleInputClick(11)}
            onCloseClick={() => this.handleCloseClick(11)}
            displayInstructions={instructionsDisplay[11]}
            isActive={isActive[11]}
            startDate="today"
            endDate="6/29/49"
            minDate="today"
            maxDate="02/20/2022"
            dateRange={true}
          />
        </div>

        <div className={classes.field}>
          <NuvNumeric
            name="responses"
            label="Number of Responses Received"
            instructions="Enter a number."
            isRequired={true}
            onInputClick={() => this.handleInputClick(2)}
            onCloseClick={() => this.handleCloseClick(2)}
            displayInstructions={instructionsDisplay[2]}
            isActive={isActive[2]}
          />
        </div>

        <div className={classes.field}>
          <NuvSelect
            name="multitest"
            label="MultiSelect Test"
            isMulti={true}
            options={selectOptions.originalSet}
            onInputClick={() => this.handleInputClick(12)}
            onCloseClick={() => this.handleCloseClick(12)}
            displayInstructions={instructionsDisplay[12]}
            isActive={isActive[12]}
          />
        </div>

        <div className={classes.sectionHeader}>
          <SectionHeader sectionHeaderTitle="Checkboxes or Check Boxes?" />
        </div>

        <div className={classes.field}>
          <NuvCheckboxes
            checkboxes={checkboxesData.flicks}
            name="flicks"
            groupLabel="Favorite flick?"
            instructions="Please choose your favorite movie(s)."
            errorMessage="What did I do wrong?"
            onInputClick={() => this.handleInputClick(20)}
            onCloseClick={() => this.handleCloseClick(20)}
            displayInstructions={instructionsDisplay[20]}
            isActive={isActive[20]}
          />
        </div>

        <div className={classes.field}>
          <NuvCheckboxes
            checkboxes={checkboxesData.programs}
            name="programs"
            groupLabel="Test these checkboxes"
            instructions="How about picking some programs now?"
            isError={false}
            errorMessage="What did I do wrong?"
            onInputClick={() => this.handleInputClick(21)}
            onCloseClick={() => this.handleCloseClick(21)}
            displayInstructions={instructionsDisplay[21]}
            isActive={isActive[21]}
          />
        </div>

        <div className={classes.sectionHeader}>
          <SectionHeader sectionHeaderTitle="Radio Buttons" />
        </div>

        <div className={classes.field}>
          <NuvRadioButtons
            radioButtons={checkboxesData.programs}
            name="oneProgram"
            groupLabel="Test these Radio Buttons!"
            instructions="Here you can only pick one program."
            errorMessage="What did I do wrong?"
            onInputClick={() => this.handleInputClick(22)}
            onCloseClick={() => this.handleCloseClick(22)}
            displayInstructions={instructionsDisplay[22]}
            isActive={isActive[22]}
          />
        </div>
        <div className={classes.field}>
          <NuvRadioButtons
            radioButtons={checkboxesData.facilities1}
            name="facilities1"
            groupLabel="Does the program reivew identify immediate (1-2 years) needs related to facilities and equipment?"
            instructions="Just answer the question."
            row={true}
            isError={true}
            errorMessage="What did I do wrong?"
            onInputClick={() => this.handleInputClick(23)}
            onCloseClick={() => this.handleCloseClick(23)}
            displayInstructions={instructionsDisplay[23]}
            isActive={isActive[23]}
          />
        </div>
        <div className={classes.field}>
          <NuvRadioButtons
            radioButtons={checkboxesData.facilities2}
            name="facilities2"
            groupLabel="Does the program reivew identify long-range (3+ years) needs related to facilities and equipment?"
            row={true}
            errorMessage="What did I do wrong?"
            onInputClick={() => this.handleInputClick(24)}
            onCloseClick={() => this.handleCloseClick(24)}
            displayInstructions={instructionsDisplay[24]}
            isActive={isActive[24]}
          />
        </div>

        <div className={classes.sectionHeader}>
          <SectionHeader sectionHeaderTitle="Program Learning Outcomes" />
        </div>

        <div className={classes.field}>
          <NuvSelect
            name="outcomesReview"
            label="Program Outcomes Review"
            options={selectOptions.outcomesReview}
            onInputClick={() => this.handleInputClick(3)}
            onCloseClick={() => this.handleCloseClick(3)}
            displayInstructions={instructionsDisplay[3]}
            isActive={isActive[3]}
          />
        </div>

        <div className={classes.field}>
          <NuvText
            name="outcomesComments"
            label="Program Outcomes Comments"
            instructions={[
              "When answering the question please:",
              "- Do this",
              "- Also do this",
              "- Make sure to do this",
              "",
              "Try another paragraph here."
            ]}
            onInputClick={() => this.handleInputClick(4)}
            onCloseClick={() => this.handleCloseClick(4)}
            displayInstructions={instructionsDisplay[4]}
            isActive={isActive[4]}
          />
        </div>

        <div className={classes.sectionHeader}>
          <SectionHeader sectionHeaderTitle="Assessment Methods" />
        </div>

        <div className={classes.field}>
          <NuvSelect
            name="methodReview"
            label="Assessment Method Review"
            options={selectOptions.methodReview}
            onInputClick={() => this.handleInputClick(5)}
            onCloseClick={() => this.handleCloseClick(5)}
            displayInstructions={instructionsDisplay[5]}
            isActive={isActive[5]}
          />
        </div>

        <div className={classes.field}>
          <NuvText
            name="methodComments"
            label="Assessment Method Comments"
            instructions={[
              "When answering the question please:",
              "- Do this",
              "- Also do this",
              "- Make sure to do this",
              "",
              "Try another paragraph here."
            ]}
            onInputClick={() => this.handleInputClick(6)}
            onCloseClick={() => this.handleCloseClick(6)}
            displayInstructions={instructionsDisplay[6]}
            isActive={isActive[6]}
          />
        </div>

        <div className={classes.sectionHeader}>
          <SectionHeader sectionHeaderTitle="Assessment Results" />
        </div>

        <div className={classes.field}>
          <NuvSelect
            name="resultsReview"
            label="Assessment Results Review"
            options={selectOptions.resultsReview}
            onInputClick={() => this.handleInputClick(7)}
            onCloseClick={() => this.handleCloseClick(7)}
            displayInstructions={instructionsDisplay[7]}
            isActive={isActive[7]}
          />
        </div>

        <div className={classes.field}>
          <NuvText
            name="resultsComments"
            label="Assessment Results Comments"
            instructions={[
              "When answering the question please:",
              "- Do this",
              "- Also do this",
              "- Make sure to do this",
              "",
              "Try another paragraph here."
            ]}
            onInputClick={() => this.handleInputClick(8)}
            onCloseClick={() => this.handleCloseClick(8)}
            displayInstructions={instructionsDisplay[8]}
            isActive={isActive[8]}
          />
        </div>

        <div className={classes.sectionHeader}>
          <SectionHeader sectionHeaderTitle="Program Learning Outcomes" />
        </div>

        <div className={classes.field}>
          <NuvSelect
            name="overallReview"
            label="Overall Review"
            options={selectOptions.overallReview}
            onInputClick={() => this.handleInputClick(9)}
            onCloseClick={() => this.handleCloseClick(9)}
            displayInstructions={instructionsDisplay[9]}
            isActive={isActive[9]}
          />
        </div>

        <div className={classes.field}>
          <NuvRichText
            name="overallComments"
            label="Overall Comments"
            instructions="Here is where you can expound at length, format away etc."
            onInputClick={() => this.handleInputClick(10)}
            onCloseClick={() => this.handleCloseClick(10)}
            displayInstructions={instructionsDisplay[10]}
            isActive={isActive[10]}
          />
        </div>
      </div>
    );
  }
}

PlanReviewDemo.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles)(PlanReviewDemo);
