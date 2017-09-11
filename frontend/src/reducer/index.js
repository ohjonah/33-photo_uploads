import {combineReducers} from 'redux';
import auth from './auth-reducer.js';
import profile from './profile-reducer.js';
import userPhotos from './photo-reducer.js';

export default combineReducers({ auth, profile, userPhotos });