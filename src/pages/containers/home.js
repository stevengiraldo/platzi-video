import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import { myPlaylist } from '../../my-playlist.json';
import { friends } from '../../friends.json';
import ModalContainer from '../../widgets/containers/modal';
import Modal from '../../widgets/components/modal';
import HandleError from '../../error/containers/handle-error';
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component {
  state = {
    modalVisible: false,
  }
  handleOpenModal = (event) => {
    this.setState({
      modalVisible: true,
    })
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }
  render() {
    return (
      <HandleError>
        <HomeLayout>
          <Related myPlaylist={myPlaylist} friends={friends} />
          <VideoPlayer />
          <Categories 
            categories={this.props.data.categories} 
            handleOpenModal={this.handleOpenModal}
            />
          {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal handleClick={this.handleCloseModal}>
            </Modal>
          </ModalContainer>
          }
        </HomeLayout>
      </HandleError>
    )
  }
}

export default Home;