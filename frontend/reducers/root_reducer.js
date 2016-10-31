import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import BenchesReducer from './benches_reducer';

const RootReducer = combineReducers({
  benches: BenchesReducer,
  session: SessionReducer
});

export default RootReducer;
