import React, {useState} from "react"
import Icon from "./components/icon";
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Card, CardBody, Container, Button, Col, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const itemArray = new Array(9).fill("empty")


const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");
  const [draw, setDraw] = useState("");

  const relaodGame = () => {
    setIsCross(false);
    setWinMessage("");
    setDraw("");
    itemArray.fill("empty", 0, 9);
  }

  const checkIsWinner = () => {
    if(itemArray[0] === itemArray[1] && 
      itemArray[0] === itemArray[2] && 
      itemArray[0] !== "empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if (itemArray[3] === itemArray[4] && 
      itemArray[3] === itemArray[5] && 
      itemArray[3] !== "empty"){
      setWinMessage(`${itemArray[3]} wins`)
    }
    else if (itemArray[6] === itemArray[7] && 
      itemArray[6] === itemArray[8] && 
      itemArray[6] !== "empty"){
      setWinMessage(`${itemArray[6]} wins`)
    }
    else if (itemArray[0] === itemArray[3] && 
      itemArray[0] === itemArray[6] && 
      itemArray[0] !== "empty"){
      setWinMessage(`${itemArray[3]} wins`)
    }
    else if (itemArray[1] === itemArray[4] && 
      itemArray[1] === itemArray[7] && 
      itemArray[1] !== "empty"){
      setWinMessage(`${itemArray[1]} wins`)
    }
    else if (itemArray[2] === itemArray[5] && 
      itemArray[2] === itemArray[8] && 
      itemArray[2] !== "empty"){
      setWinMessage(`${itemArray[2]} wins`)
    }
    else if (itemArray[0] === itemArray[4] && 
      itemArray[0] === itemArray[8] && 
      itemArray[0] !== "empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }
    else if (itemArray[6] === itemArray[4] && 
      itemArray[6] === itemArray[2] && 
      itemArray[6] !== "empty"){
      setWinMessage(`${itemArray[6]} wins`)
    }
  }



  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, {type: "success"})
    }


    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)
    }
    
    else{
      setDraw(true);
      return toast("Game is draw", {type : "error"})
    };
    
    checkIsWinner();

  };

  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage || draw ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage ? winMessage : draw }
              </h1>
              <Button color="success" block onClick={relaodGame}>Reload the Game</Button>
              <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
              {/* Restart the game */}
            </h1>
            </div>
          ) : (
            <div>
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
            </div>
          ) } 
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card color= "warning" onClick= { () => changeItem(index) }>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
      <div>
        <center>
      <Button className = "btn btn-lg btn-success" style={{marginTop : "25px", fontSize : "25px"}} color="success" onClick={relaodGame}>Reload the Game</Button>
        </center>
      </div>
    </Container>
  );
}

export default App;
