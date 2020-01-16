import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));


class InputField extends React.Component {
  constructor(props) {
    super(props)



    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  submit() {
    alert(this.state.value)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  render() {
      return (
        <form className={useStyles.root} noValidate autoComplete="off">
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={this.handleChange}/>
          <Button variant="contained" color="primary" onClick={this.submit}>
            Submit
          </Button>
        </form>
      );
  }
}
export default InputField
