import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
    marginBottom: '0px',
  },
  formControlLabel: {
    fontSize: 17,
  },
}));

export default function CheckBox () {
  const classes = useStyles();
  const [state, setState] = React.useState({
    weeklyNews: false,
    monthlyNews: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { weeklyNews, monthlyNews, } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select News to Display</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={weeklyNews} onChange={handleChange} name="weeklyNews" />}
            label={<Typography className={classes.formControlLabel}>Weekly</Typography>}
          />
          <FormControlLabel
            control={<Checkbox checked={monthlyNews} onChange={handleChange} name="monthlyNews" />}
            label={<Typography className={classes.formControlLabel}>Monthly</Typography>}
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}

