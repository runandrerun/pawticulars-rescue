import { FETCH_RESCUES } from './types';

export const fetchRescues = () => {
  return (dispatch) => {
    return dispatch({
      type: FETCH_RESCUES,
      payload: 'TEST'
    });
  };
};
