import { FETCH_RESCUES } from '../actions/types';

const initialState = {
  rescues: [],
  test: 'HI'
};

const rescuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RESCUES:
    return {
      rescues: state.rescues
    };
    break;

    default:
    return state;
    break;
  };
};

export default rescuesReducer;
