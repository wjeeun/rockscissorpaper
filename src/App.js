import "./App.css";
import Box from "./component/Box";
import { useState } from "react";
//1. 박스 2개 (타이틀, 사진, 결과)
//2. 가위 바위 보 버튼이 있다
//3. 버튼을 클릭하면 클릭한 값이 박스에 보임
//4. 컴퓨터는 랜덤하게 아이템 선택이 된다
//5. 3 4의 결과를 가지고 누가 이겼는지 승패를 따진다
//6. 승패결과에 따라 테두리 색이 바뀐다 (이기면 초록, 지면 빨강, 비기면 검은색)

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const judgement = (user, computer) => {
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

  const play = (userChoice) => {
    let computerChoice= randomChoice();
    setUserSelect(choice[userChoice]);
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
