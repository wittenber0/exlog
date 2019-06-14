import React, { Component } from 'react';

import LiftComponent from './LiftComponent';
import './PageComponent.css'

import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    maxWidth: '80%',
    overflowX: 'auto',
  },
};

class PageComponent extends Component{

  render(){
    const { classes } = this.props;
    return(<div className={classes.root}><Paper><LiftComponent/></Paper></div>);
  }

}

export default withStyles(styles)(PageComponent);
