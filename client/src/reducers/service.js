import { SERVICE_COMMENT } from "../actions";

const service = {
  message: "",
  inner_image: "",
  url: "",
  total_comments: 0,
  total_likes: 0,
  Comments: [],
  scrapNum: 0,
  prices: [],
};

const serviceReducer = (state = service, action) => {
  switch (action.type) {
    case SERVICE_COMMENT:
      return { ...state, Comments: [...state.Comments, action.payload] };
    default:
      return state;
  }
};
export default serviceReducer;
