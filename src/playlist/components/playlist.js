import React, { Component } from 'react';
import Media from './media';

class Playlist extends Component {
  render() {
    const playlist = this.props.data.categories[0].playlist
    return (
      <div>
        {
          playlist.map((item) => {
            return <Media
              author={item.author}
              src={item.cover}
              title={item.title}
              type={item.type}
              key={item.id}
            />
          })
        }
      </div>
    )
  }
}

export default Playlist;