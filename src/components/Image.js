import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <>
            <img key={this.props.key}
                        onClick={() => this.props.fullImage(this.props.img.urls.small)}
                        src={this.props.img.urls.small}
                        alt="unslapsh"
                        style={{ width: "100%" }}
                        height="300px"
                      />
            </>
        )
    }
}
