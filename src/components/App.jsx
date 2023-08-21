import React, { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
export class App extends Component   {
  state = {
    name : "",
    value : "",
    status : false,
    shownModal: false,
    ModalImg : "",
    ModalAlt: "",
  }


  handleChange = () => {
    this.setState({})
  }

  render () {
    return(
    <>
    <Searchbar name={this.state.name} value={this.state.value} onChanhe={this.handleChange}/>
    </>)
  }
  
};
