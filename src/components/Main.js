import React, { Component } from "react";

import "../App.css";
import Image from "./Image";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: false,
      temImg: "",
    };
  }
  fullImage = (image) => {
    this.setState({ model: true, temImg: image });
  };

  render() {
    return (
      <>
        {this.state.model && (
          <div className="container-fluid bg-dark ">
            <img
              style={{ minWidth: "100%", height: "100vh" }}
              src={this.state.temImg}
            />
            <div className="top-right">
              <i
                onClick={() => this.setState({ model: false })}
                className="fa fa-times text-danger fa-5m  "
                aria-hidden="true"
              ></i>
            </div>
          </div>
        )}

        <div className=" container gallery mt-5">
          {this.props.sort
            ? this.props.align
              ? this.props.reverseOrderImagesData.map((imag) =>
                  imag.reverse().map((img, i) => (
                    <div className="pics">
                      <Image key={i} img={img} fullImage={this.fullImage} />
                    </div>
                  ))
                )
              : this.props.reverseOrderImagesData.map((imag) =>
                  imag.map((img, i) => (
                    <div className="pics">
                      <Image key={i} img={img} fullImage={this.fullImage} />
                    </div>
                  ))
                )
            : this.props.align
            ? this.props.imagesData.map((imag) =>
                imag.reverse().map((img, i) => (
                  <div className="pics">
                    <Image key={i} img={img} fullImage={this.fullImage} />
                  </div>
                ))
              )
            : this.props.imagesData.map((imag) =>
                imag.map((img, i) => (
                  <div className="pics">
                    <Image key={i} img={img} fullImage={this.fullImage} />
                  </div>
                ))
              )}
        </div>
      </>
    );
  }
}
