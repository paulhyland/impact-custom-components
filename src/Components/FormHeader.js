import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InfoOutlined from "@material-ui/icons/InfoOutlined";
import Close from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    position: "relative",
    width: "100%",
    flexGrow: 1,
    zIndex: 1
  },
  margin: {
    margin: theme.spacing.unit
  },
  grow: {
    flexGrow: 1
  },
  topBar: {
    height: "55px",
    minHeight: "40px",
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  h3: {
    fontSize: "1.1em"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 50
  },
  textButton: {
    fontSize: "1em",
    margin: "3px 0 3px 14px",
    textTransform: "capitalize",
    borderRadius: 5,
    padding: "0px",
    "&:hover": {
      color: "#333",
      backgroundColor: "#f9be00"
    }
  },
  button: {
    fontSize: "0.8em",
    margin: "3px 8px 3px 14px",
    textTransform: "capitalize",
    borderRadius: 20,
    padding: 6,
    "&:hover": {
      color: "#333",
      backgroundColor: "#f9be00"
    }
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  instructionsContent: {
    flexGrow: 1,
    visibility: "visible",
    backgroundColor: "#aacbc8",
    fontSize: ".95em",
    padding: theme.spacing.unit * 3,
    position: "relative",
    display: "none"
  },
  instructionsParagraph: {
    margin: 0,
    paddingRight: theme.spacing.unit * 4
  },
  instructionsLine: {
    margin: 0,
    minHeight: "1em",
    lineHeight: "1.3em"
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing.unit * 1.5,
    right: theme.spacing.unit * 1.5
  }
});

class FormHeader extends React.Component {
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
    const { formHeaderTitle, instructions } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="relative">
          <Toolbar className={classes.topBar}>
            <Typography variant="h3" color="inherit" className={classes.h3}>
              {formHeaderTitle}
            </Typography>
            <div className={classes.grow} />
            <IconButton
              color="inherit"
              className={classes.button}
              aria-label="Info"
              onClick={this.handleClick}
            >
              <InfoOutlined />
            </IconButton>
            <Button color="inherit" className={classes.textButton}>
              Cancel
            </Button>
            <Button color="inherit" className={classes.textButton}>
              Save
            </Button>
            <Button color="inherit" className={classes.textButton}>
              Submit
            </Button>
          </Toolbar>
        </AppBar>

        {//only show instructions if they exist
        instructions ? (
          <div className={classes.instructionsContent} id="instructions">
            <Typography paragraph className={classes.instructionsParagraph}>
              {Array.isArray(instructions) ? (
                <div className={classes.instructionsParagraph}>
                  {instructions.map((instructionsEntry, index) => {
                    return (
                      <Typography
                        key={index}
                        paragraph={true}
                        variant="body2"
                        className={classes.instructionsLine}
                      >
                        {instructionsEntry}
                      </Typography>
                    );
                  })}
                </div>
              ) : (
                <div className={classes.instructionsParagraph}>
                  <Typography
                    paragraph={true}
                    variant="body2"
                    className={classes.instructionsLine}
                  >
                    {instructions}
                  </Typography>
                </div>
              )}
            </Typography>
            <div className={classes.grow} />
            <IconButton
              color="inherit"
              className={classes.closeButton}
              aria-label="Close"
              onClick={this.handleClick}
            >
              <Close />
            </IconButton>
          </div>
        ) : null}
      </div>
    );
  }
}

FormHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  formHeaderTitle: PropTypes.string.isRequired,
  instructions: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

FormHeader.defaultProps = {
  instructions: ""
};

export default withStyles(styles)(FormHeader);
