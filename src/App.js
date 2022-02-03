import react, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import elc from "./images/icon-ellipsis.svg";
import avatar from "./images/image-jeremy.png";
import json from "./data.json";

function App() {
  console.log(json);
  const [TimeDur, setTimeDur] = useState("daily");
  function timeDuration(time) {
    setTimeDur(time);
    console.log(json[0].timeframes[time]);
  }
  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="card-item">
            <div className="personal-info-container">
              <img className="jeremy-image" src={avatar} alt="" />
              <div>
                <h1>
                  <span className="report-text">Report for</span> <br />
                  Jeremy Robson
                </h1>
              </div>
            </div>
            <div className="time-container">
              {TimeDur === "daily" ? (
                <div
                  className="time"
                  onClick={(e) => timeDuration("daily")}
                  style={{ color: "white" }}
                >
                  Daily
                </div>
              ) : (
                <div className="time" onClick={(e) => timeDuration("daily")}>
                  Daily
                </div>
              )}
              {TimeDur === "weekly" ? (
                <div
                  className="time"
                  onClick={(e) => timeDuration("weekly")}
                  style={{ color: "white" }}
                >
                  Weekly
                </div>
              ) : (
                <div className="time" onClick={(e) => timeDuration("weekly")}>
                  Weekly
                </div>
              )}
              {TimeDur === "monthly" ? (
                <div
                  className="time"
                  onClick={(e) => timeDuration("monthly")}
                  style={{ color: "white" }}
                >
                  Monthly
                </div>
              ) : (
                <div className="time" onClick={(e) => timeDuration("monthly")}>
                  Monthly
                </div>
              )}
            </div>
          </div>
          <div className="card-item">
            <div className="activity">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Work
                <p>
                  <img src={elc} alt="" />
                </p>
              </div>
              <div className="activity-hour">
                {json[0].timeframes[TimeDur].current}hrs
              </div>
              <p>Last week -{json[0].timeframes[TimeDur].previous}hrs</p>
            </div>
          </div>
          <div className="card-item">
            <div className="activity">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Play
                <p>
                  <img src={elc} alt="" />
                </p>
              </div>
              <div className="activity-hour">
                {json[1].timeframes[TimeDur].current}hrs
              </div>
              <p>last week -{json[1].timeframes[TimeDur].previous}hrs</p>
            </div>
          </div>
          <div className="card-item">
            <div className="activity">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Study
                <p>
                  <img src={elc} alt="" />
                </p>
              </div>
              <div className="activity-hour">
                {json[2].timeframes[TimeDur].current}hrs
              </div>
              <p>last week -{json[2].timeframes[TimeDur].previous}hrs</p>
            </div>
          </div>
          <div className="card-item">
            <div className="activity">
              <div
                style={{
                  display: "flex",
                  justifyContent: " space-between",
                  alignItems: "center",
                }}
              >
                Exercise
                <p>
                  <img src={elc} alt="" />
                </p>
              </div>
              <div className="activity-hour">
                {json[3].timeframes[TimeDur].current}hrs
              </div>
              <p>last week -{json[3].timeframes[TimeDur].previous}hrs</p>
            </div>
          </div>
          <div className="card-item">
            <div className="activity">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Social
                <p>
                  <img src={elc} alt="" />
                </p>
              </div>
              <div className="activity-hour">
                {json[4].timeframes[TimeDur].current}hrs
              </div>
              <p>last week -{json[4].timeframes[TimeDur].previous}hrs</p>
            </div>
          </div>
          <div className="card-item">
            <div className="activity">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                Self Care
                <p>
                  <img src={elc} alt="" />
                </p>
              </div>
              <div className="activity-hour">
                {json[5].timeframes[TimeDur].current}hrs
              </div>
              <p>last week -{json[5].timeframes[TimeDur].previous}hrs</p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://www.linkedin.com/in/snehasis-debbarman-19833b159/">
            Snehasis Debbarman
          </a>
          .
        </div>
      </footer>
    </div>
  );
}

export default App;
