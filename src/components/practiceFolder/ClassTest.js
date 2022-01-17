import React, { Component } from 'react'
import ClassChild from './ClassChild'
import axios from 'axios'

export default class ClassTest extends Component {
    constructor(props) {
        super(props)
        this.state={
            test:[]
        }
        console.log("Constructor")
       }
     async componentDidMount(){
        axios.get("https://api.unsplash.com/photos/?client_id=7885Ljx-T0IKKJuZZYbFqExiuqaon4whpEdEOO37YMY")
        .then((res)=>{
            console.log("componentDidMount Res", res.data)
            this.setState({test:res.data})
        })
       .catch((err)=>{
           console.log( "componentDidMount Err", err)
       })
    
        
     }
    render() {
        console.log("Render")
        console.log("Render ", this.state.test)
       return (
            <div>
               <h1>Hello Class</h1> 
               <ClassChild  test={this.state.test}/>
            </div>
        )
    }
}

