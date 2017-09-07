import superagent from 'superagent';

export const createProfile = (profile) => ({
  type: 'CREATE_PROFILE',
  payload: profile
})

export const updateProfile = (profile) => ({
  type: 'UPDATE_PROFILE',
  payload: profile
})

export const createProfileRequest = (profile) => (dispatch, getState) => {
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/profiles`)
  .set('Authorization', `Bearer ${auth}`)
  .field('bio', profile.bio)
  .attach('avatar', profile.avatar)
  .then( response => {
    dispatch(createProfile(response.body));
    return response;
  })
}