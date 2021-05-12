import { AUTHENTICATED, SHOW_LOADING, LOG_OUT, LEARNER_OBJ } from "../constants/Learner";

const initState = {
  user: {},
  loading: false,
  learner: {},
};

const learner = (state = initState, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: {},
        loading: false,
      };
    case LEARNER_OBJ:
      return {
        ...state,
        learner: action.payload,
      };
    default:
      return state;
  }
};

export default learner;
