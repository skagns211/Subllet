import { SELECT_PLAN } from "../actions";

const plan = {};

const selectPlan = (state = plan, action) => {
  if (action.type === SELECT_PLAN) {
    state = action.payload;
    return state;
  } else {
    return state;
  }
};
export default selectPlan;
