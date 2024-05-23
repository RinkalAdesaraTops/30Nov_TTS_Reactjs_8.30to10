import React, { Component } from 'react'

class LifecycleClass extends Component {
    constructor(){
        super()
        this.state = {
            rollno:101,
            name:"Test"
        }
        console.log('constructor calling....'+this.state.name);

    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({name:"Pqr"})
            console.log('component did mount called...'+this.state.name);
        },5000)
    }
    static getDerivedStateFromProps(props,state){
        console.log('get derived state from props called..');
        // state.name = "UpdatedName"
        return state;
    }
    shouldComponentUpdate(){
        console.log('should component updated '+this.state.name);
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('prev state name is '+prevState.name);
        return prevState
    }
    componentDidUpdate(){
        console.log("Name is "+this.state.name);
    }
    componentWillUnmount(){
        console.log('destroyed...');
    }
  render() {
    console.log('render calling..');
    return (
      <div>
        <h3>RollNo is -- {this.state.rollno}</h3>
        <h3>Name is -- {this.state.name}</h3>
        <button onClick={()=>this.setState({name:"ABc"})}>Change Name</button>
      </div>
    )
  }
}

export default LifecycleClass;
