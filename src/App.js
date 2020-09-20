import React from "react";
import { Route, Link } from "react-router-dom";

import logo from "./logo192.png";
import "./App.css";

import Main from "./components/Main";
import Board from "./components/Board";
import End from "./components/End";

import Info from "./Info";
import Button from "./Counter";

function App(onStart) {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          {/* 페이지 이동 */}
          <div style={{ textAlign: "left" }}>
            <br></br>
            <Link to="/">Main</Link>
            <br></br>
            <Link to="/input">Input</Link>
            <br></br>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go Chill
            </a>
          </div>

          <div>
            {/* 도넛 */}
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          {/* <h4>
            <p>
              도넛 OR start 버튼을 눌러서 게임시작!<br></br>
              <br></br>
              10초 안에 도넛을 없애서<br></br>
              SCORE를 올려보세요!
            </p>
          </h4> */}

          <Link to="/ingame">
            <br></br>
            <a className="App-start" target="_blank" rel="noopener noreferrer">
              <button onClick={onStart}>START</button>
            </a>
          </Link>

          <Route path="/" component={Main} exact={true} />
          <Route path="/ingame" component={Board} />
          <Route path="/input" component={End} />
        </header>

        <Button />
      </div>
    </div>
  );
}

export default App;
