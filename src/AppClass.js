import React, { Component } from 'react'
import BoxClass from './component/BoxClass';

const choice = {
  rock: {
    name: "Rock",
    img: "https://lh3.googleusercontent.com/proxy/DhMOYEiDahapl76-fbgkbnKLsz0NObdtenYyAoS02iVKqRq9tTGvrLNrn4IGLiMmENGNU7WuVS53OJ5b9apsD8HP",
  },
  scissor: {
    name: "Scissor",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Rs2HvQlBf29rPYLzPAcbrPBqKVaVavsMd-i1n8QRpw&s",
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/HcCJo/btqXD4Lybq6/kcrH6skAoOD9oAq2QYfBx1/paper.png?attach=1&knm=img.png",
  },
};

export default class AppClass extends Component {

  constructor(props){
    super(props);
    this.state={
      userSelect:null,
      computerSelect:null,
      result:''
    }
  }

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'tie';
    } else {
      if (user.name === "Rock") {
        return computer.name === "Scissor"?"win":"lose";
      } else if (user.name === "Scissor") {
        return computer.name === "Paper"?"win":"lose";
      } else if (user.name === "Paper") {
        return computer.name === "Rock"?"win":"lose";
      }
    }
  };

  play = (userChoice) => {
    let computerChoice= this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.judgement(choice[userChoice], computerChoice)
    });
  };


  render() {
    return (
      <div>
      <div className="main">
        <BoxClass title="You" item={this.state.userSelect} result={this.state.result} />
        <BoxClass title="Computer" item={this.state.computerSelect} result={this.state.result} />
      </div>
      <div className="main">
        <button onClick={() => this.play("scissor")}>가위</button>
        <button onClick={() => this.play("rock")}>바위</button>
        <button onClick={() => this.play("paper")}>보</button>
      </div>
    </div>
    )
  }
}
