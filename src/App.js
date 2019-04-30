import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import ImagesContainer from './components/imageContainer/imageContainer';
import Footer from "./components/Footer/footer";



class App extends Component {
  // We set the variables that change during the game as states
  state = {
    score : 0,
    highScore: 0,
    selectedID: [],
    message: "Click on the Characters below to earn points, but don't click any of them twice or you LOSE!"
  }
  
  // Image handler function
  handleImageClick = event => {
    
    // Clicked Image variable
    const imageID = event.target.id;

    //Condition for when same image is clicked multiple times
    if (this.state.selectedID.includes(imageID)) {
      this.setState({
        score: 0, 
        selectedID: [],
        message: "Oops! You had already picked that character...Try again!",
      });

    } else {
      // When image is clicked for first time, its ID gets pushed to imageID array
      this.state.selectedID.push(imageID);

      // Condition to update high score if current score is greater than high score. A
      if (this.state.highScore <= this.state.score) {
        this.setState({
          highScore: this.state.score + 1,
          message: "Click on the Characters below to earn points, but don't click any of them twice or you LOSE!",
          score: this.state.score + 1
        })
      } else {
        this.setState({
          message: "Oops! You had already picked that character...Try again!",
          score: this.state.score + 1
        })
      }
    }
  }
  
  render() {
    return (
      <div>
        <Header message = {this.state.message} score = {this.state.score} highScore = {this.state.highScore}/>
        <ImagesContainer handleImageClick = {this.handleImageClick}/>
        <Footer />
      </div>
    );
  }
 
}

export default App;