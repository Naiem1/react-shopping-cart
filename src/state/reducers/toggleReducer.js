const initialState = { isOpen: false };

const toggleReducer = (state, action) => {
  switch (action.type) {
    case 'open':
      return { isOpen: true };
    case 'close':
      return { isOpen: false };
    case 'toggle':
      return { isOpen: !state.isOpen };
    default:
      return state;
  }
};

export { initialState, toggleReducer };
