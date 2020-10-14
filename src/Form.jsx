import React, { Component } from 'react'

class Form extends Component {
  state = {
    // add attributes here
    name:" ",
    age: 0,
    sex: " ",
    picture: " ",
    "favorite toy": " ",
  }

  handleChange = (evt) => {
    // write logic for updating the state with the user's input
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    console.log(evt.target.value)
    // write a POST fetch request for creating a new cat
    fetch("http://localhost:3000/cats", {
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:this.state.name,
        age:this.state.age,
        sex:this.state.sex,
        picture:this.state.picture,
        "favorite toy":this.state["favorite toy"]
      })
    })
    .then(resp=>resp.json)
    .then(newCat=>{
       this.props.addNewCat(newCat)
    })
  }

  render() {
    return (
      <div>
        
        <form>
          <h3>Add a new cat</h3>

          <label>Name</label>
          <input type="text" name="name" value={this.state.name} autoComplete="off"/>

          <label>Age</label>
          <input type="text" name="age" value={this.state.age} autoComplete="off" />

          <label>Sex</label>
          <input type="text" name="sex" value={this.state.sex} autoComplete="off" />

          <label>Image link</label>
          <input type="text" name="picture" value={this.state.picture} autoComplete="off" />

          <label>Favorite toy</label>
          <input type="text" name="favorite toy" value={this.state["favorite toy"]} autoComplete="off" />
          
        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
      </form>
      </div>
    )
  }
}

export default Form