import React, { Component } from 'react';

import LiftComponent from './LiftComponent';
import './PageComponent.css'

import Paper from '@material-ui/core/Paper';

class PageComponent extends Component{

  render(){
    return(<div><Paper><LiftComponent/></Paper></div>);
  }

}

export default PageComponent;
