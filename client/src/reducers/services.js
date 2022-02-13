import { SERVICECS_LIST } from "../actions";

const services = [];

const servicesReducer = (state = services, action) => {
  switch (action.type) {
    case SERVICECS_LIST:
      return (state = action.payload);
    default:
      return state;
  }
};
export default servicesReducer;
