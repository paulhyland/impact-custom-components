import React from "react";
import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    position: "relative",
    width: "100%",
    flexGrow: 1,
    borderTop: "1px solid #aaa"
  },
  margin: {
    margin: theme.spacing.unit
  },
  grow: {
    flexGrow: 1
  },
  h3: {
    fontSize: "1em",
    color: "#333"
  },
  titleBar: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: theme.spacing.unit * 3.5,
    marginBottom: 15,
    backgroundColor: "#eee"
  }
});

class SectionHeader extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      value: props.viewState,
      viewState: props.viewState
    };
  }

  handleClick() {
    if (document.getElementById("instructions").style.display !== "block") {
      document.getElementById("instructions").style.display = "block";
    } else {
      document.getElementById("instructions").style.display = "none";
    }
  }

  render() {
    const { classes } = this.props;
    const { sectionHeaderTitle } = this.props;

    return (
      <div className={classes.root}>
        <Paper elevation={1} square={true}>
          <div className={classes.titleBar}>
            <Typography variant="h3" color="inherit" className={classes.h3}>
              {sectionHeaderTitle}
            </Typography>
          </div>
        </Paper>
      </div>
    );
  }
}

SectionHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  sectionHeaderTitle: PropTypes.string.isRequired
};

export default withStyles(styles)(SectionHeader);
