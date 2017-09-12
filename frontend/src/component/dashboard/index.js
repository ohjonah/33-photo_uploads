import React from 'react';
import {connect} from 'react-redux';
import * as util from '../../lib/util.js';
import * as photoActions from '../../action/photo-actions.js';

import PhotoForm from '../photo-form';
import PhotoItem from '../photo-item';

class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserPhotos()
    .catch(util.logError);
  }

  render(){
    return (
      <div className='dashboard'>
        <h2>dashboard</h2>
        <PhotoForm
          buttonText='post'
          onComplete={(photo) =>{
            return this.props.createUserPhoto(photo)
            .catch(console.error)
          }}
            />
        {this.props.userPhotos.map(photo =>
          <PhotoItem key={photo._id} photo={photo} />
        )}
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile,
  userPhotos: state.userPhotos,
})

let mapDispatchToProps = (dispatch) => ({
  createUserPhoto: (photo) => dispatch(photoActions.createUserPhotoRequest(photo)),
  fetchUserPhotos: (photos) => dispatch(photoActions.fetchUserPhotosRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);