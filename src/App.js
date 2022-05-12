import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './Person';


class App extends React.Component {
  state = {
    Person: {
      fullName : "Islem Yengui",
      bio : "I just love chocolat",
      imgSrc : 'photo.jpg',
      profession : "student",
    },
    show : true,
    counter:0
    
  };
  componentDidMount() {
    setInterval(()=>{
      this.tick();
    },1000);
  }
  

  tick() {
    this.setState({counter:this.state.counter +1 });
  }

  handleShowPerson = () => {
    this.setState({
       show: !this.state.show,
    });
  }
  render() {
    return (
      <>
      {
        this.state.show &&
        <div>
          <h1>{this.state.Person.fullName}</h1>
          <h1>{this.state.Person.bio}</h1>
          <img src={this.state.Person.imgSrc} ></img>
          <h1>{this.state.Person.profession}</h1>
          <h1>{this.state.counter}</h1>
        </div>
        }
        <br></br>
        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}

export default App;
