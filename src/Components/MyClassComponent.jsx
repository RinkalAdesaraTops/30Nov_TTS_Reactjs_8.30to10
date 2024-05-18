import React, { Component } from 'react';

class MyClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:"myclassname",
            count:0,
            color:this.props.color
        }
    }
    render() {
        const changeName = ()=>{
            this.setState({
                name:"UpdatedName"
            })
        }
        const addCounter = ()=>{
            this.setState({count:this.state.count+1})
            this.setState({color:'blue'})
            if(this.state.count == 5){
                this.setState({color:'green'})
            }
        }
        return (
            <div>
                <h3>My Class Component Called..</h3>
                <h4>Name is -- {this.state.name}</h4>
                <button onClick={changeName}>Change Name</button>
                <h3 style={{color:this.state.color}} >Counter is --  {this.state.count}</h3>
                {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Add</button> */}
                <button onClick={addCounter}>Add</button>
            </div>
        );
    }
}

export default MyClassComponent;