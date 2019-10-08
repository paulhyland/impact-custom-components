import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import Close from "@material-ui/icons/Close";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 2,
    minWidth: 48
  },
  instructionsParagraph: {
    margin: 0,
    padding: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 5,
    backgroundColor: theme.palette.secondary.background,
    whiteSpace: "normal",
    wordBreak: "break-all"
  },
  instructionsLine: {
    margin: 0,
    minHeight: "1em",
    lineHeight: "1.3em"
  },
  closeButton: {
    position: "absolute",
    color: theme.palette.grey[600],
    top: 12,
    right: 10,
    transform: "scale(0.8)"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    opacity: 1,
    fontSize: ".875rem",
    zIndex: 10,
    overflow: "auto",
    margin: 15
  },
  select: {
    width: 200
  },
  popper: {
    zIndex: 5,
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: "-1.5em",
      width: "3em",
      height: "1em",
      "&::before": {
        borderWidth: "0 1em 1em 1em",
        borderColor: `transparent transparent ${
          theme.palette.secondary.background
        } transparent`
      }
    },
    '&[x-placement*="top"] $arrow': {
      bottom: 0,
      left: "40px !important",
      marginBottom: "-1.5em",
      width: "6em",
      height: "3em",
      "&::before": {
        borderWidth: "1em 1em 0 1em",
        borderColor: `${
          theme.palette.secondary.light
        } transparent transparent transparent`
      }
    },
    '&[x-placement*="right"] $arrow': {
      left: 0,
      marginLeft: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 1em 1em 0",
        borderColor: `transparent ${
          theme.palette.secondary.background
        } transparent transparent`
      }
    },
    '&[x-placement*="left"] $arrow': {
      right: 0,
      marginRight: "-0.9em",
      height: "3em",
      width: "1em",
      "&::before": {
        borderWidth: "1em 0 1em 1em",
        borderColor: `transparent transparent transparent ${
          theme.palette.secondary.background
        }`
      }
    }
  },
  arrow: {
    position: "absolute",
    fontSize: 10,
    width: "3em",
    height: "3em",
    "&::before": {
      content: '""',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid"
    }
  }
});

class Instructions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arrow: true,
      arrowRef: null,
      disablePortal: false,
      flip: false,
      closeClicked: false,
      preventOverflow: "scrollParent"
    };

    this.handleArrowRef = this.handleArrowRef.bind(this);
  }

  handleArrowRef = node => {
    this.setState({
      arrowRef: node
    });
  };

  render() {
    const { classes } = this.props;
    const { id, instructions, open, anchorEl, placement } = this.props;
    const {
      flip,
      arrow,
      arrowRef,
      disablePortal,
      preventOverflow,
      closeClicked
    } = this.state;

    const openIt = open && !closeClicked;

    return (
      <div className={classes.root}>
        <div>
          <Popper
            id={id}
            open={openIt}
            anchorEl={anchorEl}
            placement={placement}
            disablePortal={disablePortal}
            className={classes.popper}
            modifiers={{
              flip: {
                enabled: flip
              },
              arrow: {
                enabled: arrow,
                element: arrowRef
              },
              preventOverflow: {
                enabled: preventOverflow !== "disabled",
                boundariesElement:
                  preventOverflow === "disabled"
                    ? "scrollParent"
                    : preventOverflow
              }
            }}
          >
            {arrow ? (
              <span className={classes.arrow} ref={this.handleArrowRef} />
            ) : null}
            <Paper className={classes.paper}>
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

              <IconButton
                color="inherit"
                className={classes.closeButton}
                aria-label="Close"
                onClick={() => this.props.onClick()}
              >
                <Close />
              </IconButton>
            </Paper>
          </Popper>
        </div>
      </div>
    );
  }
}

Instructions.propTypes = {
  classes: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  instructions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  open: PropTypes.bool,
  fieldActive: PropTypes.bool,
  id: PropTypes.string,
  placement: PropTypes.oneOf([
    "bottom-end",
    "bottom-start",
    "bottom",
    "left-end",
    "left-start",
    "left",
    "right-end",
    "right-start",
    "right",
    "top-end",
    "top-start",
    "top"
  ]),
  anchorEl: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
    PropTypes.node
  ])
};

Instructions.defaultProps = {
  placement: "top-start"
};

export default withStyles(styles)(Instructions);
