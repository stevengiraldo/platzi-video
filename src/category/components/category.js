import React, { Component } from 'react';
import Playlist from '../../playlist/components/playlist';

class Category extends Component {
  render() {
    const category = this.props.data.categories[0];
    return (
      <div>
        <h2>{category.title}</h2>
        <p>{category.description}</p>
        <Playlist playlist={category.playlist} />
      </div>
    )
  }
}

export default Category;