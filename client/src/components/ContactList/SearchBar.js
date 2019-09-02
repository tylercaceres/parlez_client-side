import React, { useState } from "react";
import deburr from "lodash/deburr";
import Autosuggest from "react-autosuggest";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const SearchBar = props => {
  let chatrooms = props.chatrooms;

  function renderInputComponent(inputProps) {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;

    return (
      <TextField
        fullWidth
        InputProps={{
          inputRef: node => {
            ref(node);
            inputRef(node);
          },
          classes: {
            input: classes.input
          }
        }}
        {...other}
      />
    );
  }

  function renderSuggestion(chatroom, { query, isHighlighted }) {
    const matches = match(chatroom.name, query);
    const parts = parse(chatroom.name, matches);

    return (
      <MenuItem selected={isHighlighted} component="div">
        <div>
          {parts.map(part => (
            <span
              key={part.text}
              style={{ fontWeight: part.highlight ? 500 : 400 }}
            >
              {part.text}
            </span>
          ))}
        </div>
      </MenuItem>
    );
  }

  function getChatrooms(value) {
    const inputValue = deburr(value.trim()).toLowerCase();
    const inputLength = inputValue.length;
    let count = 0;

    return inputLength === 0
      ? []
      : chatrooms.filter(chatroom => {
          const keep =
            count < 5 &&
            chatroom.name.slice(0, inputLength).toLowerCase() === inputValue;

          if (keep) {
            count += 1;
          }

          return keep;
        });
  }

  function getSuggestionValue(chatroom) {
    return chatroom.name;
  }

  const useStyles = makeStyles(theme => ({
    root: {
      height: 250,
      flexGrow: 1
    },
    container: {
      position: "relative"
    },
    suggestionsContainerOpen: {
      position: "absolute",
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0
    },
    suggestion: {
      display: "block"
    },
    suggestionsList: {
      margin: 0,
      padding: 0,
      listStyleType: "none"
    },
    divider: {
      height: theme.spacing(2)
    }
  }));

  const classes = useStyles();
  const [state, setState] = useState({
    single: ""
  });

  const [chatroomSuggestions, setChatroomSuggestions] = useState([]);

  const handleChatroomsFetchRequested = ({ value }) => {
    setChatroomSuggestions(getChatrooms(value));
  };

  const handleChatroomsClearRequested = () => {
    setChatroomSuggestions([]);
  };

  const handleChange = name => (event, { newValue }) => {
    setState({
      ...state,
      [name]: newValue
    });
  };

  const autosuggestProps = {
    renderInputComponent,
    suggestions: chatroomSuggestions,
    onSuggestionsFetchRequested: handleChatroomsFetchRequested,
    onSuggestionsClearRequested: handleChatroomsClearRequested,
    getSuggestionValue,
    renderSuggestion
  };

  return (
    <Autosuggest
      {...autosuggestProps}
      inputProps={{
        classes,
        id: "react-autosuggest-simple",
        label: "Search...",
        placeholder: "Search for a chat",
        value: state.single,
        onChange: handleChange("single")
      }}
      theme={{
        container: classes.container,
        suggestionsContainerOpen: classes.suggestionsContainerOpen,
        suggestionsList: classes.suggestionsList,
        suggestion: classes.suggestion
      }}
      renderSuggestionsContainer={options => {
        // console.log("options", options); // options.query = selected value
        return (
          <Paper onClick={props.onClick} {...options.containerProps} square>
            {options.children}
          </Paper>
        );
      }}
    />
  );
};

export default SearchBar;
