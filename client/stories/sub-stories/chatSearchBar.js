import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import SearchBar from "../../src/components/ContactList/SearchBar";
import Paper from "@material-ui/core/Paper";

// please keep this here for now...
// const renderSuggestionsContainer = options => {
//   return (
//     <Paper onClick={action("clicked!")} {...options.containerProps} square>
//       {options.children}
//     </Paper>
//   );
// };

const story = () => {
  // Chat Search Bar:
  storiesOf("SearchBar", module)
    .add("SearchBar", () => (
      <SearchBar
        renderSuggestionsContainer={options => {
          return (
            <Paper {...options.containerProps} square>
              {options.children}
            </Paper>
          );
        }}
      ></SearchBar>
    ))
    .add("SearchBar_clickable", () => (
      <SearchBar
        renderSuggestionsContainer={options => {
          return (
            <Paper
              onClick={action("clicked!")}
              {...options.containerProps}
              square
            >
              {options.children}
            </Paper>
          );
        }}
      ></SearchBar>
    ));
};

export default story;
