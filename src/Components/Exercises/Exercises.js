import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import RightPane from './RightPane'
import LeftPane from './LeftPane'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
  },
}));

export default function Exercises(props) {

  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item sm>
        <LeftPane classes={classes} exercises={props.exercises}/>
      </Grid>
      <Grid item sm>
        <RightPane classes={classes}/>
      </Grid>
    </Grid>
  );
}
