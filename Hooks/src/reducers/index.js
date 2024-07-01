// import BUY_CAKE from "../action"
const initialState = {
    noOfCakes:10
}

const counterReducer = (state = initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            noOfCakes:state.noOfCakes - 1
        }
        default: return state
    }

}
export default counterReducer()