import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories';
import Related from '../components/related';
import { myPlaylist } from '../../my-playlist.json';
import { friends } from '../../friends.json';

class Home extends Component {
  render() {
    return (
      <HomeLayout>
        <Related myPlaylist={myPlaylist} friends={friends} />
        <Categories categories={this.props.data.categories} />
      </HomeLayout>
    )
  }
}

export default Home;