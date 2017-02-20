import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from "jquery"; //Import Jquery 

class App extends Component {

  _postData() {

    //form encoded data
    //var dataType = 'application/x-www-form-urlencoded; charset=utf-8';
    //var data = $('form').serialize();

    //JSON data
    var dataType = 'application/json; charset=utf-8';
    var data = { "name": "test" , "description": "test" , "quantity": 3 }

    console.log('Submitting form...');

    // fetch('http://localhost:5000/api/values', {
    //   method: 'POST',
    //   headers: {
    //      'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     name: "test",
    //     description: "test one",
    //     quantity: 3
    //   })
    // }).then((response) => console.log(response.json()))
    
    $.ajax({
      type: 'POST',
      url: 'http://localhost:5000/api/values',
      dataType: 'json',
      contentType: dataType,
      data: JSON.stringify(data),
      success: function (result) {
        console.log('Data received: ');
        console.log(result);
      }
    });

  }

  render() {

    this._postData();

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
