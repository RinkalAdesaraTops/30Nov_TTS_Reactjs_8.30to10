// function FirstComponent(){

// }
const FirstComponent = ()=>{
    let a = "10"
    const cube = (b)=>{
        //let b=5
        console.log('cube func calling..'+(b*b*b));
        //  return b*b*b;
    }
    const myCustomStyle = {
        backgroundColor:'yellow',
        color:'blue'
    }
    return(
        <div>
            <h3 style={{color:'red'}}>My First Component Created</h3>
            <h4>A is - {a}</h4>
            <h4 style={myCustomStyle}>Add is - {10+20}</h4>
            <h4>Cube is </h4>
            
            {/* <button onClick={cube}>Cube</button> */}
            <button onClick={()=>cube(6)}>Cube</button>
        </div>
    )
}

export default FirstComponent;