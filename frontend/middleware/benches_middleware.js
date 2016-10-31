import { fetchBenches } from '../util/bench_api_util';
import { REQUEST_BENCHES, receiveBenches } from '../actions/bench_actions';

const BenchesMiddleware = ({ getState, dispatch }) => next => action => {
  
  switch(action.type){
    case REQUEST_BENCHES:
      const success = data => dispatch(receiveBenches(data));
      fetchBenches(success);
      return next(action);
    default:
      return next(action);
  }
}

export default BenchesMiddleware;
