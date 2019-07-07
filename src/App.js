import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import {
  CssBaseline,
  Container,
  Typography,
  IconButton,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';

import { PlayCircleFilled, PauseCircleFilled } from '@material-ui/icons';

import Slider from '@material-ui/lab/Slider';
const PrettoSlider = withStyles({
  root: {
    color: '#52af77',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  bpmValue: {
    paddingRight: '5px'
  },
  smallSpacing: {
    marginTop: '25px'
  },
  mediumSpacing: {
    marginTop: '35px'
  }
});

class App extends Component {
  constructor() {
    super();

    this.state = {
      isPlaying: false,
      bpm: 60,
      newBpm: 60,
      isProgressive: false,
      startValue: 40,
      endValue: 80,
      step: 5,
      delay: 30,
      currentTick: 0
    };

    this.tickNormal = new Audio('data:audio/flac;base64, ZkxhQwAAACIQABAAAARBAARBAfQBcAAAAZLfwZb9QVlTtnnZLOsaWczxhAAAKCAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMCAyMDEzMDUyNgAAAAD/+HQMAAGRJhgKxHRX63x+6QxXqTpCYAANDJgITNAmIhAB/5BgFt4iAfgBZHY4A9UZAAZ65QManTnQUAKnx8A+ZcwFun6gX1gMVIgAfaXgEml9KIzgfUBYAnhLwJl/Oek+A5rZADhx2ApN3s198CTrfAPyHMGRV3DcKAYAAwBJ7uA8wysUF8HYV6AUyIIKv/ObD0B7BRAOf6QFVnlVIrg0zuwGYTqCTP9rJXAWm4AC1HQDxVMnllwVg94CGPDDq6XrJRgQ2zwHp6wGR5tQFGh9dygZtwIXeHNK+AHAw8BZ34BSgBUY44Ze3IEt2uEhBfQg3BcaTA+MSB/rIUTNIUTWYN9hMdT2M/TYEg+cDC6KGzFJQAzj8TBBUujjHFLnsqB07TAj7JBa4qTwQY15pQ9rKxSdhzrJwxaKA3o/BKIsTkDYtGCwxtDRCIqzegQo2pAr9KD0mKmwtRJeuhMscnKzjNLLCC4CCDoYNaPiZmNPNIsdzTJkF0zHIRyDGDZzCLozKYLfNVZUYt6pWUiy7/Bjf5CyRUJ95iW1TLkIET7MJJU5yxARVwzCNBsIZHCVflJ5ZE+0K30dXKabEjNYdP+TulglDBSFPJNlCtxqLycmj5OeMkURsMFSXgrtnXLllFm5cySbjiZQKoshh0ASOArXdBJuJ9c2syJBjM8II1VJYFtSEVbCw3f80qnABkAClxxw8mPk8NdHt4q9gNy0UpWEuO2UUx3jZSuRqVkcoWnWIWa1ahV3Y3K5KbKMH879vqjUtUZMatwgfZeOMvsQlyisbQ71rIxGX9FhUSYvRHvF3xeunSYfQ4iRItSvuvzR5iO3xDFaEdARSGOC1fGIpY/hll/Z8dBI+J6u22KvVuDK2IiXW9V8Htkhxa94kLDPz25hsMC8qImvymxd70W8D5iDfsU9TYMYt5EIfJnAWr0bS7NbeHbQu6ZsuZyvTuhwMbc9XFv3q4b4amazBWwDvKfuyGSBrwrbr8+kkvhfZKs7C2FwoVooWXOnr/sWmZ5hWFSSpEtq0O6bjQhPR6Eguo8PmOz4SoKeIgpRmJZ1CEWpm1U6F/2UKJhBBJi0KeJ6kgEoPCeWSBmv85AOeDhOk/mJgciON6g0DZHbeVa7jIhYMBSP4ukvNIr36CvTjhkZCkWJk5godIxpiOjqiEnoJQ2K3HjKtYcY2CFWiXpIrqaGEIgef4gs+JXnhRm4GziHB2h/OIRB6BgfhgH4ap2DiTgVwIUN6FjaguFoE0uENThJRYJMOBCwg3zIOyKB00gOl4LXWC79gW14DOaCQAglUoEKCApZgc1YHC2AxzgJBoFcSBWWgICoBp+BEXgO64BeGAXYgMGoCoCAOYgEk4CGWAb5gB54A2SAWGgEfoAHyAINgDuYAkeAAbgBfoAgyAEEgAC4ARGADPgAf4AFyABYgAeIACGAAMgAaYAECABJgAagfd0=');
    this.tickFourth = new Audio('data:audio/flac;base64, ZkxhQwAAACIQABAAAASHAASHAfQBcAAAAZJmQcYR2ioJT3jLmpb50AcuhAAAKCAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMCAyMDEzMDUyNgAAAAD/+HQMAAGRJhBCh7ABAABSN/Kj7gAAO6mnM9FAABNfIJUGAAAKe7DI43gADmxTR20QAA53IcX+iAALK1xEl4gACoqNw0FgAB/tkIQPcAA68EcD1IAAZiCiAIzAALFXrAngwAExaWgjHIAHzZPgsM4AHJZsgvrYAGJUrgugYAFhGQgpy4AEjifgirIAPzFBA0gwAcDn+BGNgAyeRkBLFABYGt4AlWACYTjQBn4AEBeNgHNQAdBcCAmPABo+A4CnsAFy/sgKPQAUfB+AkkABGD6oB4QAPayPALSgBv8cIA8UAMqE3AELABaVToALEAJ9svAAtwBFMTIAQuAercOAFrgHCDYgBioBmQP4AXWAXE3CAFAgFJOzgA/oBIkwIALiA/bWcADnAdVRyAA8gNfC3AAKwGKSUgABgCywJwADIBQSqIACEAjqycAA6A/PfkAAyA64TcAAoA2kbkAAgAyUecAAWAuH70AAQAp/IsAAKAl5zkAAEAh4E8AACB7zsoAAGDn8bwAAAGw+0gAAgMlAvAABQXR16AAGgq2pcAALBOaKIAAGCObMwAAIEAe4gAAweSH+AACByPxIAAEGt2XgAAgZMdaAABBeMh4AAAFe2QgAAQUVO+AACBLCiIAAIETZngAAQ/YNEAADHjCDgAAI5bXkAACG0L5gAAgzqlEAAEGG1TgABAuFpUAAEFa8pgAAIosaEAAJEwgbgAA4jem0AAAEHfjgAAx84IIAAEd/fGAACnMlIgAAJuZ/4AACacCiAACmUuZgAA5gsdIAAKXEnOAABFf2wgAABTuE4AAGT45qAAAkt4jgAARHdsIAAEQ4jeAABP9dBAABnvnzgAAjwaEQAAF0k44AAG4gwUAADbYruAABtRFJAAAWbMTgAATHEFQAAJgVf4AAAumsEAABWiZ2AAAK5RpAAAVQ8LgAA6iwZQAAVOlb4AAIl7akAAISTGOAAEI0vBAABkQNzgAASDJ1QAAD+UkwAAL5nAQAAP1A+wAAPwilQAAPsLcwAAHn7tQAATjzLwAAbfxpQAADb3LwAAXYDvQAAHUW/wAADQxCQAAPNRmwAAXJ43QAAXGmXwAAXDaaQAAPAUgwAAO9U4QAAC6bNwAAK3ngQAAK05rwAACyRnQAAGvvJwAAGtSUQAACq65wAAKoo1QAAamcJwAAqkUbQAAqiSDwAAigUaQAAaeb1wAAacn5QAAKa4uwAAGZOLQAAGXoCwAAGWGYQAACUo9wAACTPxQAAKR6swAACQpnQAASPcewAACOTJQAAONNewAAKMLfQAAKLNCwAAGKSCQAAOJaQwAAGIl1QAACH0fwAACHGOQAACGa3wAAKFyXQAACFMnwAACEpjQAAKEJCwAASDq7QAASDPRwAASC1zQAACCehwAAOCJYQAACB2IwAACBk0QAACBVRwAAKBHbQAAOA7GwAAOAwZQAAGAm9wAAGAe7QAAOAX/wAACASQQAACANfwAASAJlQAAiAGowAAaAEOQAASACkwAACABaQAAOAAnwAACAAOQAAKAADwAACAABAJLL');

    this.resetTimer();
    this.resetProgressiveTimer();
  }

  tick = () => {
    if (!this.state.isPlaying) return;

    const tickSound = this.state.currentTick % 4 === 0 ? this.tickFourth : this.tickNormal;
    tickSound.play();

    this.setState({
      currentTick: this.state.currentTick + 1
    });

    if (this.state.newBpm !== this.state.bpm) {
      this.setState({
        bpm: this.state.newBpm
      }, this.resetTimer);
    }
  }

  tickBpmIncrement = () => {
    if (!this.state.isProgressive) return;
    if (!this.state.isPlaying) return;

    if (this.state.bpm < this.state.endValue) {
      const increment = Math.min(this.state.step, this.state.endValue - this.state.bpm);
      this.setState({
        newBpm: this.state.bpm + increment
      });
    }
  }

  resetTimer = () => {
    if (this._tickInterval) {
      clearInterval(this._tickInterval);
    }

    this._tickInterval = setInterval(this.tick, Math.ceil(60 / this.state.bpm * 1000));
  }

  resetProgressiveTimer = () => {
    if (this._progressiveInterval) {
      clearInterval(this._progressiveInterval);
    }

    this._progressiveInterval = setInterval(this.tickBpmIncrement, this.state.delay * 1000);
  }

  handleChangeProgressive = (event) => {
    const progressiveEnabled = !this.state.isProgressive;
    let newBpm = this.state.newBpm;
    if (progressiveEnabled) newBpm = this.state.startValue;
    this.setState({
      isProgressive: progressiveEnabled,
      newBpm
    }, () => {
      if (progressiveEnabled) this.resetProgressiveTimer();
    });
  }

  handleChangeStartValue = (event) => {
    const value = Number(event.target.value);
    if (value <= 0) return;
    this.setState({
      startValue: value
    });
  }

  handleChangeEndValue = (event) => {
    const value = Number(event.target.value);
    if (value <= 0) return;
    this.setState({
      endValue: value
    });
  }

  handleChangeStep = (event) => {
    const value = Number(event.target.value);
    if (value <= 0) return;
    this.setState({
      step: value
    });
  }

  handleChangeDelay = (event) => {
    const value = Number(event.target.value);
    if (value <= 0) return;
    this.setState({
      delay: value
    }, this.resetProgressiveTimer);
  }

  handleStartPlaying = () => {
    this.setState({
      isPlaying: true
    });
  }

  handleStopPlaying = () => {
    this.setState({
      isPlaying: false
    });
  }

  // handleSliderChanged = (event, value) => {
  //   this.setState({
  //     sliderValue: value
  //   });
  // }

  handleSetBpm = (event, value) => {
    this.setState({
      newBpm: value
    });
  }

  renderControls() {
    if (this.state.isPlaying) {
      return (
        <IconButton color="primary" onClick={this.handleStopPlaying}>
          <PauseCircleFilled fontSize="large" />
        </IconButton>
      );
    } else {
      return (
        <IconButton color="primary" onClick={this.handleStartPlaying}>
          <PlayCircleFilled fontSize="large" />
        </IconButton>
      );
    }
  }

  render() {
    const classes = this.props.classes;

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h3">
            Metronome
          </Typography>
          <div className={classes.smallSpacing}></div>
          <div>
            <Typography component="h1" variant="h4" display="inline" classes={{h4: classes.bpmValue}}>
              {this.state.newBpm}
            </Typography>
            <Typography component="h1" variant="h6" display="inline">
              BPM
            </Typography>
          </div>
          <PrettoSlider valueLabelDisplay="auto" value={this.state.newBpm} min={35} max={180} onChange={this.handleSetBpm} />
          <div className={classes.mediumSpacing}></div>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox checked={this.state.isProgressive} onChange={this.handleChangeProgressive} value="progressiveMetronome" color="primary" />}
                  label="Progressive metronome"
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  name="startValue"
                  type="number"
                  variant="outlined"
                  fullWidth
                  id="startValue"
                  label="Start"
                  autoFocus
                  value={this.state.startValue}
                  onChange={this.handleChangeStartValue}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  name="endValue"
                  type="number"
                  variant="outlined"
                  fullWidth
                  id="endValue"
                  label="End"
                  autoFocus
                  value={this.state.endValue}
                  onChange={this.handleChangeEndValue}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  name="step"
                  type="number"
                  variant="outlined"
                  fullWidth
                  id="step"
                  label="Step"
                  autoFocus
                  value={this.state.step}
                  onChange={this.handleChangeStep}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <TextField
                  name="delay"
                  type="number"
                  variant="outlined"
                  fullWidth
                  id="delay"
                  label="Delay"
                  autoFocus
                  value={this.state.delay}
                  onChange={this.handleChangeDelay}
                />
              </Grid>
            </Grid>
          </form>
          <div className={classes.mediumSpacing}></div>
          {this.renderControls()}
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(App);
