import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TableComponent from './TableComponent';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then((res)=>{
        console.log(res);
        this.setState({ data: res });
        
      })
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/api');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    if(this.state.data){
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <TableComponent data={this.state.data} columnNames={Object.keys(this.state.data[0])}></TableComponent>
          </header>
          
        </div>
      );
    }else{
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <p className="App-intro">Loading</p>
          </header>
          
        </div>
      );
    }
  }
}

export default App;