import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Navbar from "./components/Navbar";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    points: 0, 
    friends
  };

  countPoint = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    let total = this.state.points +1;
    this.setState({points:total});
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar/>
        <Title/>
        {this.state.friends.map(friend => (
          <FriendCard
            countPoint={this.countPoint}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
