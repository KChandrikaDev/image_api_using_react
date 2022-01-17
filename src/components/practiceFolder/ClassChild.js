import React, { Component } from 'react'

export default class ClassChild extends Component {
    constructor(props) {
        super(props)
      this.state={
        current:this.props.test,
        imag:[]
      }
        console.log("Constructor")
    }
    static getDerivedStateFromProps(props, state){
        return {
            imag:props.test
        }
    }
    
 render() {
     console.log("Render", this.props.test)
     console.log("Render", this.state.imag)
     console.log("Render current", this.state.current)
        return (
            <div>
               {
                   this.state.imag.map((data)=>(
                       <img src={data.urls.small}></img>
                   ))
               }
            </div>
        )
    }
}
