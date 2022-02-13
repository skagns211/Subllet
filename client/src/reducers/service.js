import { SERVICE_DETAIL } from "../actions";

const service = "";

const serviceReducer = (state = service, action) => {
  switch (action.type) {
    case SERVICE_DETAIL:
      return (state = action.payload);
    default:
      return state;
  }
};
export default serviceReducer;
