import React, { Component } from 'react';

import TableComponent from './TableComponent';

class LiftComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      data:null
    };
  }

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.getAllLifts().then((res)=>{
        console.log(res);
        this.setState({ data: res });
      }).catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  getAllLifts = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render(){
    if(this.state.data){
      return(<div><TableComponent data={this.state.data} columnNames={Object.keys(this.state.data[0])}></TableComponent></div>);
    }else{
      return(<div></div>);
    }
  }

}

export default LiftComponent;
