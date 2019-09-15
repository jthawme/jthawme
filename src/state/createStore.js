import { createStore as reduxCreateStore } from "redux"

export const ACTIONS = {
  SET_BG_IMAGE: 'SET_BG_IMAGE'
};

const initialState = {
  backgroundImage: false
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_BG_IMAGE:
      return {
        ...state,
        backgroundImage: action.value
      };
    default: {
      return state;
    }
  }
}

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore;
