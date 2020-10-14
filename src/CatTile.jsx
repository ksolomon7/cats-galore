import React, { Component } from 'react'

class CatTile extends Component {
  state = {
    // add attributes here
    toggleTile:false
  }

  toggleTile = () => {
    this.setState({
      toggleTile: !this.state.toggleTile
    })
    // update the state for toggling the cat's information
  }

  handleLikes = () => {
    // write a PATCH fetch request for increasing a cat's likes
  }

  render() {
    let {name,age,sex,picture,likes, }=this.props.cat
      return(
        <div className="cat-tile">
          <img alt={name} src={picture}/>
          <h3>{name}</h3>
          <p>{likes} likes</p>
          <button>Like</button>
          <button onClick={this.toggleTile}>Learn more</button>
            {
            this.state.toggleTile ?
            <ul>
              <li>{age}</li>
              <li>{sex}</li>
              <li>{this.props.cat["favorite toy"]}</li>
            </ul>
                :
              null
          }
        </div>    
    )
  }
}

export default CatTile