import { createStore } from 'redux';
import counterReducer from '../reducers/index'; 

const store = createStore({
  reducer: counterReducer, 
});

export default store;