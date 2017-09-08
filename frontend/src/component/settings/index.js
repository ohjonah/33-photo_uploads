import React from 'react';
import {connect} from 'react-redux';
import ProfileForm from '../profile-form';
import {createProfileRequest} from '../../action/profile-actions.js';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.handleCreateProfile = this.handleCreateProfile.bind(this);
    this.handleUpdateProfile = this.handleUpdateProfile.bind(this);
  }

  handleCreateProfile(profile) {
    return this.props.createProfile(profile)
    .then( response => {
      console.log('create profile response:', response);
    })
    .catch(console.error)
  }

  handleUpdateProfile() {};

  render() {

    return (
      <div className='settings'>
        <h2>Profile Settings:</h2>
        <ProfileForm
          buttonText='create profile'
          onComplete={this.handleCreateProfile} />
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profile
})

let mapDispatchToProps = (dispatch) => ({
  createProfile: (profile) => dispatch(createProfileRequest(profile))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);