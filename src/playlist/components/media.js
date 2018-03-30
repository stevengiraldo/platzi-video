import React, { Component } from 'react';

class Media extends Component {

  render() {
    const styles = {
      container: {
        fontSize: 14,
        backgroundColor: 'purple'
      }
    }
    return (
      <div style={styles.container}>
        <div>
          <img src='./images/covers/responsive.jpg' alt='' width={260} height={160} />
        </div>
        <h3>¿Por qué aprender Responsive Design?</h3>
        <p>Steven Giraldo</p>
      </div>
    )
  }
}

export default Media;