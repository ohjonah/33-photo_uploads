import superagent from 'superagent';

export const fetchUserPhotos = (photos) => ({
  type: 'FETCH_USER_PHOTOS',
  payload: photos,
});

export const createUserPhoto = (photo) => ({
  type: 'CREATE_USER_PHOTO',
  payload: photo
});

export const updateUserPhoto = (photo) => ({
  type: 'UPDATE_USER_PHOTO',
  payload: photo
});

export const deleteUserPhoto = (photo) => ({
  type: 'DELETE_USER_PHOTO',
  payload: photo
});

export const fetchUserPhotosRequest = (photo) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.get(`${__API_URL__}/photos/me`)
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(fetchUserPhotos(res.body.data));
    return response;
  });
}

export const deleteUserPhotoRequest = (photo) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.delete(`${__API_URL__}/photos/${photo._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .then(response => {
    dispatch(deleteUserPhoto(photo));
    return response;
  });
}

export const updateUserPhotoRequest = (photo) => (dispatch, getState) => {
  let {auth} = getState();

  return superagent.put(`${__API_URL__}/photos/${photo._id}`)
  .set('Authorization', `Bearer ${auth}`)
  .field('description', photo.photo)
  .then(response => {
    dispatch(updateUserPhoto(response.body));
    return response;
  });
}

