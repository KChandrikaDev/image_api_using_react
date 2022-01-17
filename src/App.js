import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: false,
      ltrRtl: false,
      imagesData: [],
      reverseOrderImagesData: [],
    };
  }

  componentDidMount() {
    this.fetchingData();
  }
  async fetchingData() {
    const url = "https://api.unsplash.com";
    const key = "7885Ljx-T0IKKJuZZYbFqExiuqaon4whpEdEOO37YMY";
    const responseData = await axios.get(`${url}/photos/?client_id=${key}`);
    console.log("responseData", responseData.data);
    const data = responseData.data;
    const imagesData = this.chunkArrayInGroups(data, 3);
    let reverseOrderImagesData = this.chunkArrayInGroups(data.reverse(), 3);
    this.setState({
      imagesData,
      reverseOrderImagesData,
    });
  }
  chunkArrayInGroups = (arr, size) => {
    var myArray = [];
    for (var i = 0; i < arr.length; i += size) {
      myArray.push(arr.slice(i, i + size));
    }
    return myArray;
  };
  sortImage = () => {
    this.setState({ sort: !this.state.sort });
  };
  alignImages = () => {
    this.setState({ ltrRtl: !this.state.ltrRtl });
  };

  render() {
    console.log("Render");
    return (
      <>
        <Header  
        sort={this.state.sort} 
        ltrRtl={this.state.ltrRtl} 
        sortImage={this.sortImage} 
        alignImages={this.alignImages} />
        <Main
          imagesData={this.state.imagesData}
          reverseOrderImagesData={this.state.reverseOrderImagesData}
          sort={this.state.sort}
          align={this.state.ltrRtl}
        />
      </>
    );
  }
}
