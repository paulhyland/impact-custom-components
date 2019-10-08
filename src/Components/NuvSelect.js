import React from "react";
import PropTypes from "prop-types";
import { withStyles, withTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RootRef from "@material-ui/core/RootRef";
import Select from "react-select";
import Instructions from "./Instructions.js";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "left",
    flexDirection: "column"
  },
  grow: {
    flexGrow: 2,
    minWidth: 48
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
  inputUnderline: {
    borderBottomColor: theme.palette.primary.main,
    "&:focus": {
      borderBottomColor: theme.palette.primary.main
    },
    "&:hover  ": {
      borderBottomColor: theme.palette.primary.main
    }
  }
});

class NuvSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id || props.name, // id value must be unique on page
      selectedValue: null,
      selectedLabel: null,
      width: null,
      selectedOptions: [],
      theme: props.theme,
      classes: props.classes,
      displayInstructions: false
    };

    this.handleChangeMulti = this.handleChangeMulti.bind(this);
    this.handleChangeSingle = this.handleChangeSingle.bind(this);
  }

  handleChangeMulti = inputValue => {
    let temp = [];
    inputValue.map(value => temp.push(value));
    this.setState({ selectedOptions: temp });
  };

  handleChangeSingle = optionSelected => {
    this.setState({ selectedValue: optionSelected.value });
  };

  render() {
    const { classes } = this.props;
    const { theme } = this.props;
    const { options } = this.props;
    const { name } = this.props;
    const { id } = this.state;
    const { isMulti } = this.props;
    const { isRequired } = this.props;
    const { isError } = this.props;
    const { isActive } = this.props;
    const { label } = this.props;
    const { minWidth } = this.props;
    const { width } = this.props;
    const { placeholder } = this.props;
    const { instructions } = this.props;
    const { displayInstructions } = this.props;
    const { errorMessage } = this.props;

    const { selectedOptions } = this.state;
    const { selectedValue } = this.state;

    const activeColor = theme.palette.action.active;
    const hoverColor = theme.palette.action.hover;
    const selectedColor = theme.palette.action.selected;
    const backgroundColor = theme.palette.background.default;
    const darkGrey = theme.palette.grey[600];
    const lightGrey = theme.palette.grey[200];
    const textColor = theme.palette.text.primary;

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
                <FormLabel htmlFor={id} required={isRequired}>
                  {label}
                </FormLabel>
              </RootRef>
              <Input
                inputComponent={Select}
                name={name}
                id={id}
                required={isRequired}
                placeholder={placeholder}
                onFocus={() => this.props.onInputClick()}
                classes={{
                  underline: classes.inputUnderline
                }}
                style={{
                  root: {
                    minWidth: { minWidth },
                    width: width ? width : "100%"
                  }
                }}
                inputProps={{
                  isMulti: isMulti,
                  closeMenuOnSelect: !isMulti,
                  options: options,
                  onChange: isMulti
                    ? this.handleChangeMulti
                    : this.handleChangeSingle,
                  styles: {
                    container: (theme, state) => ({
                      ...theme,
                      opacity: state.isDisabled ? ".5" : "1",
                      backgroundColor: "transparent",
                      padding: "1px 0 1px"
                    }),
                    control: (theme, state) => ({
                      // none of react-select's styles are passed to <Control />
                      ...theme,
                      color: textColor,
                      backgroundColor: "transparent",
                      border: 1,
                      minHeight: 0,
                      // Removes weird border around container
                      boxShadow: state.isFocused ? null : null
                    }),
                    option: (base, state) => ({
                      ...base,
                      color: textColor,
                      height: 32,
                      backgroundColor: state.isSelected
                        ? selectedColor
                        : state.isFocused
                        ? hoverColor
                        : backgroundColor,
                      ":active": {
                        backgroundColor: activeColor
                      }
                    }),
                    menu: base => ({
                      ...base,
                      // override border radius to match the box
                      borderRadius: 0,
                      // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
                      hyphens: "auto",
                      // kill the gap
                      marginTop: 0,
                      textAlign: "left",
                      // prevent menu to scroll y
                      wordWrap: "break-word",
                      zIndex: 5
                    }),
                    menuList: base => ({
                      ...base,
                      // kill the white space on first and last option
                      padding: 0
                    }),
                    valueContainer: base => ({
                      ...base,
                      padding: "2px 0"
                    }),
                    input: base => ({
                      ...base,
                      paddingBottom: 1
                    }),
                    singleValue: base => ({
                      ...base,
                      borderRadius: 12,
                      padding: "4px 0"
                    }),
                    multiValue: base => ({
                      ...base,
                      borderRadius: 12,
                      padding: 0
                    }),
                    multiValueLabel: base => ({
                      ...base,
                      color: textColor,
                      fontSize: "100%",
                      padding: "2px 3px 1px 6px"
                    }),
                    multiValueRemove: base => ({
                      ...base,
                      borderRadius: "0 12px 12px 0",
                      color: textColor,
                      "&:hover": {
                        backgroundColor: darkGrey,
                        color: lightGrey
                      }
                    }),
                    placeholder: base => ({
                      ...base,
                      opacity: 1
                    }),
                    clearIndicator: base => ({
                      ...base,
                      padding: "0 4px"
                    }),
                    indicatorSeparator: base => ({
                      ...base,
                      marginTop: 4,
                      marginBottom: 4
                    }),
                    dropdownIndicator: base => ({
                      ...base,
                      padding: "0 4px"
                    })
                  }
                }}
              />

              {isError ? (
                <FormHelperText error={true}>{errorMessage}</FormHelperText>
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

NuvSelect.propTypes = {
  onInputClick: PropTypes.func.isRequired,
  onCloseClick: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  isMulti: PropTypes.bool,
  isRequired: PropTypes.bool,
  isError: PropTypes.bool,
  errorMessage: PropTypes.string,
  isActive: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  instructions: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  displayInstructions: PropTypes.bool,
  minWidth: PropTypes.number,
  width: PropTypes.number
};

NuvSelect.defaultProps = {
  isMulti: false,
  isRequired: false,
  isError: false,
  isActive: false,
  minWidth: 260,
  width: 500,
  instructions: "",
  placeholder: ""
};

export default withTheme()(withStyles(styles)(NuvSelect));
