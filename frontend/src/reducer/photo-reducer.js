export default (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
    case 'FETCH_USER_PHOTOS':
      return payload;

    case 'CREATE_USER_PHOTO':
      return [payload, ...state];

    case 'UPDATE_USER_PHOTO':
      return state.map(item => item._id === payload.id ? payload : item);

    case 'DELETE_USER_PHOTO':
      return state.filter(item => item._id !== payload.id);

    case 'LOGOUT':
      return [];

    default:
      return state;
  }
}