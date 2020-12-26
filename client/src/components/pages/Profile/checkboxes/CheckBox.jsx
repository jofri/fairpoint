import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import {updateUserNewsSettings, getUser} from '../../../../services/api';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  formControlLabel: {
    fontSize: 17,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function CheckBox (props) {
  const classes = useStyles();
  const handleChange = async (event) => {
    const eventName = event.target.name;
    const oldUser = props.loginUser;
    oldUser.settings.newssettings[eventName] = event.target.checked;
    await props.setLoginUser(oldUser);
    await updateUserNewsSettings(props.loginUser.googleId, oldUser.settings.newssettings);
    getUser().then((userInfo) => {
      props.setLoginUser(userInfo);
    })
      .catch(err => console.log(err));
  };

  const { UK, world, business, health, tech, sport, entertainment, science } = props.loginUser.settings.newssettings;
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select News to Display</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={UK} onChange={handleChange} name="UK" />}
            label={<Typography className={classes.formControlLabel}>UK</Typography>}
          />
          <FormControlLabel
            control={<Checkbox checked={world} onChange={handleChange} name="world" />}
            label={<Typography className={classes.formControlLabel}>World</Typography>}
          />
          <FormControlLabel
            control={<Checkbox checked={business} onChange={handleChange} name="business" />}
            label={<Typography className={classes.formControlLabel}>Business</Typography>}
          />
          <FormControlLabel
            control={<Checkbox checked={health} onChange={handleChange} name="health" />}
            label={<Typography className={classes.formControlLabel}>Health</Typography>}
          />
          <FormControlLabel
            control={<Checkbox checked={tech} onChange={handleChange} name="tech" />}
            label={<Typography className={classes.formControlLabel}>Tech</Typography>}
          />
          <FormControlLabel
            control={<Checkbox checked={sport} onChange={handleChange} name="sport" />}
            label={<Typography className={classes.formControlLabel}>Sport</Typography>}
          />
          <FormControlLabel
            control={<Checkbox checked={entertainment} onChange={handleChange} name="entertainment" />}
            label={<Typography className={classes.formControlLabel}>Entertainment</Typography>}
          />
          <FormControlLabel
            control={<Checkbox checked={science} onChange={handleChange} name="science" />}
            label={<Typography className={classes.formControlLabel}>Science</Typography>}
          />
        </FormGroup>
        {/* <FormHelperText>Be careful</FormHelperText> */}
      </FormControl>
    </div>
  );
}

