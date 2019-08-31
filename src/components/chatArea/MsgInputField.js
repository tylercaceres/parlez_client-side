import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));

const MsgInputField = ()  => {
  const classes = useStyles();
  const [values, setValues] = useState("");
  const [charCount, setCharCount] = useState("0 characters");

  const handleChange = event => {
    setValues(event.target.value);
    setCharCount(`${event.target.value.length.toString()} characters`)
  };

  return (
      <TextField
        id="message-input-field"
        label="Enter Message"
        placeholder="Start typing ..."
        multiline
        helperText={charCount}
        rows="4"
        value={values}
        onChange={handleChange}
        margin="normal"
        fullWidth={true}
        variant="outlined"
      />
      );
}

export default MsgInputField