let validateCreateProfile = (profile) => {
  if (!profile.avatar || !profile.bio || !profile._id || !profile.owner || !profile.username || !profile.email) {
    throw new Error('VALIDATION ERROR: profile requires additional info');
  }
};

export default (state=null, action) => {
  let {type, payload} = action;

  switch(type) {
    case 'CREATE_PROFILE':
      validateCreateProfile(payload);
      return payload;

    case 'UPDATE_PROFILE':
      return {...state, ...payload};

    case 'LOGOUT':
      return null;

    default: return state;
  }
}