import React, { Component } from 'react'
import './App.css'
import CatsContainer from './CatsContainer.jsx'
import Form from './Form.jsx'
import Search from './Search.jsx'

class App extends Component {
  state = {
    // add attributes here
    cats:[]
  }

  componentDidMount() {
    // write a GET fetch request here to get all the cats
    fetch("http://localhost:3000/cats")
    .then(resp=>resp.json())
    .then(arrayOfCats=>{
      this.setState({
        cats:arrayOfCats
      })
    })
  }

  changeSearchTerm = () => {
    // write logic for updating the search term
  }

  pickCats = () => {
    // write logic for filtering the cats array, depending on the search term 
  }

  addNewCat = () => {
    // write logic for adding a new cat to the backend
  }

  updateCat = () => {
    // write logic for updating an existing cat to the backend
  }

  render() {
    return (
      <>
        <h1>Cats galore!</h1>
        <Search/>
        <CatsContainer cats={this.state.cats}/>
        <Form addNewCat={this.addNewCat}/>
      </>
    )
  }
}

export default App