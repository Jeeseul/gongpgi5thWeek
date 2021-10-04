import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

import Info from "./Info";

import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



function App() {

  const newArrayData = Info.map((item, index) => {

    if (item.type === 'textarea'){
      return (
        <div class="input-group input-group-sm my-1">
          <span class="input-group-text w-25 " id="inputGroup-sizing-sm">{item.name}</span>
          <textarea class="form-control form-control-sm" rows={item.row}/>
        </div>
      );
    }else if(item.type === 'select'){
      return(
        <div class="row d-flex justify-content-center">
          <p class="mb-0">{item.name}</p>
          <select class="form-select form-select-sm w-75" aria-label=".form-select-sm example" id="selectLabel">
            <option selected>Open this select menu</option>
            {item.options.map((option, index) => (
              <option key={index}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    }else if(item.type === 'checkbox'){
      return(
        <div class="d-flex justify-content-center">
          <p class="me-2">{item.name}: </p>
          {item.options.map((option, index) => (
              <div class="form-check" key={index}>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                <label class="form-check-label me-2" for="flexCheckChecked">
                  {option}
                </label>
              </div>
          ))}
        </div>
      );
      
    }else{
      return (
        <div class="input-group input-group-sm my-1">
          <span class="input-group-text w-25 " id="inputGroup-sizing-sm">{item.name}</span>
          <input class="form-control form-control-sm" type={item.type}/>
        </div>
      );
    }
  });

  return (

    <div className="App">
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>
      <script
        src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>
      <script
        src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>
      <script>var Alert = ReactBootstrap.Alert;</script>

      <div class="container-fluid w-600">
        <div class="row m-1">
          <div class="glenda-1-hex h-600">
            {newArrayData}
          </div>
        </div>
      </div>

            
    </div>

  );
}

export default App;