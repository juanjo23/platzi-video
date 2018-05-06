import React, {Component} from 'react';
import HomeLayout from './home-layout';
import Categories from '../playlist/components/categories'
import Related from '../components/related/related'
import data from '../api.json';
import ModalContainer from '../components/widgets/modal-container';
import Modal from '../components/widgets/modal.js';
import './home.css';

class Home extends Component {
  state = {
    modalVisible: false
  }
  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false
    });
  }

  handleCategoryClick = (evt) => {
    this.setState({
      modalVisible: true
    })
  }

  render = () => (
    <HomeLayout>
      <div className="main-container">
        <div className="left-sidebar">
          <Related/>
        </div>
        <div className="categories-container">
          <Categories handleClick={this.handleCategoryClick} categories={data.categories} />
        </div>
      </div>
      {
        this.state.modalVisible &&
        <ModalContainer>
          <Modal handleClick={this.handleCloseModal} >
            <h1>THIs is a portal </h1>
          </Modal>
        </ModalContainer>
      }
    </HomeLayout>
  )
}

export default Home;