import React, {Component} from 'react';
import HomeLayout from './home-layout';
import Categories from '../playlist/components/categories'
import Related from '../components/related/related'
import data from '../api.json';
import ModalContainer from '../components/widgets/modal-container';
import Modal from '../components/widgets/modal.js';
import HandleErrors from '../playlist/components/handle-errors';
import VideoPlayer from '../components/video-player/video-player';
import './home.css';

class Home extends Component {
  state = {
    modalVisible: false,
    media: null
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    });
  }

  handleCategoryClick = (evt) => {
    this.setState({
      modalVisible: true,
      media: data.categories[0].playlist.find(item => item.id = evt.target.id)
    })
  }

  render = () => (
    <HandleErrors>
      <HomeLayout>
        <div className="main-container">
          <div className="left-sidebar">
            <Related />
          </div>
          <div className="categories-container">
            <Categories
              handleClick={this.handleCategoryClick}
              categories={data.categories} />
          </div>
        </div>
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal handleClick={this.handleCloseModal} >
              <VideoPlayer media={this.state.media}>
              </VideoPlayer>
            </Modal>
          </ModalContainer>
        }
      </HomeLayout>
    </HandleErrors>
  )

}

export default Home;