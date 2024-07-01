
import { connect } from "react-redux";
const ReduxExample = ({noOfcakes}) => {
  return (
    <div>
      <h3>Redux Example</h3>
      
      <p className="counter_title">Total Cakes: {noOfcakes}</p>
      <button className="button" onClick={buycake}>
        Buy Cake
      </button>
      
   
    </div>
  )
}
const mapStateToProps = (state) => ({
  noOfCakes: state.noOfCakes 
  //  Use 'counter: state.counter.counter' and replace the above line if you are using combineReducers to ensure that 'counter' matches the correct key in your store.
});

const mapDispatchToProps = (dispatch) => ({
  buycake: () => dispatch({ type: "BUY_CAKE" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample);
