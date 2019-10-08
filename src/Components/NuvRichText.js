import React from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { Editor } from "@tinymce/tinymce-react";
import Instructions from "./Instructions.js";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RootRef from "@material-ui/core/RootRef";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "left",
    flexDirection: "column"
  },
  inputArea: {
    display: "flex",
    flexGrow: 1,
    margin: theme.spacing.unit,
    borderRadius: theme.shape.borderRadius,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit * 3.5,
      marginRight: theme.spacing.unit * 3.5,
      width: "auto"
    }
  },
  formLabel: {
    marginLeft: theme.spacing.unit * 0.5,
    marginBottom: theme.spacing.unit
  },
  formHelperText: {
    marginLeft: theme.spacing.unit * 0.5,
    marginTop: theme.spacing.unit
  }
});

class NuvRichText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id || props.name, // id value must be unique on page
      value: props.initialValue
    };

    this.handleEditorChange = this.handleEditorChange.bind(this);
  }

  handleEditorChange = e => {
    this.setState({ value: e.target.getContent() });
  };

  render() {
    const { classes } = this.props;
    const { theme } = this.props;
    const { name } = this.props;
    const { label } = this.props;
    const { isActive } = this.props;
    const { isError } = this.props;
    const { isRequired } = this.props;
    const { instructions } = this.props;
    const { displayInstructions } = this.props;
    const { errorMessage } = this.props;
    const { width } = this.props;

    const { value } = this.state;
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
        <React.Fragment>
          <div className={classes.inputArea}>
            <FormControl
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
                <FormLabel
                  htmlFor={id}
                  required={isRequired}
                  className={classes.formLabel}
                >
                  {label}
                </FormLabel>
              </RootRef>
              <Editor
                textAreaName={name}
                initialValue={value}
                init={{
                  statusbar: false,
                  content_style:
                    "body {font-family: Roboto, 'Helvetica Neue', Arial, sans-serif; font-size: 14px; color: rgba(0, 0, 0, 0.87);} p {margin:0;} ",
                  plugins:
                    "link image code table lists autoresize help spellchecker",
                  menubar: false,
                  browser_spellcheck: true,
                  contextmenu: false,
                  toolbar:
                    "undo redo | styleselect  | bold italic underline forecolor fontsizeselect 	 | alignleft aligncenter alignright | indent outdent | numlist bullist | link table",
                  fontsize_formats: "11px 12px 14px 16px 18px 24px 36px 48px"
                }}
                onChange={this.handleEditorChange}
                onFocus={() => this.props.onInputClick()}
              />
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
        </React.Fragment>
      </div>
    );
  }
}
NuvRichText.propTypes = {
  classes: PropTypes.object.isRequired,
  onInputClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isRequired: PropTypes.bool,
  isError: PropTypes.bool,
  initialValue: PropTypes.string,
  instructions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  displayInstructions: PropTypes.bool,
  errorMessage: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NuvRichText.defaultProps = {
  isRequired: false,
  isError: false,
  initialValue: "",
  displayInstructions: false,
  isActive: false,
  width: "100%",
  instructions: ""
};

export default withTheme()(withStyles(styles)(NuvRichText));
