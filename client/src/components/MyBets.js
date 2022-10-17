import React from "react";
import { useState, useEffect } from "react";
import MyBetsCard from "./MyBetsCard";
import PendingBets from "./PendingBets";
function MyBets({ setLoggedUser, loggedUser }) {
  const [bets, setBets] = useState([]);
  const [pendingBets, setPendingBets] = useState([])


  // CLOSED BETS
  useEffect(() => {
    fetch("/betsforuser", {
      headers: {
        token: sessionStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBets(data.reverse());
      });
  }, []);

  // PENDING BETS
  useEffect(() => {
    fetch("/pendingbets", {
      headers: {
        token: sessionStorage.getItem("jwt"),
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPendingBets(data.reverse())
      });
  }, []);

  return (
    <div className="all-bets-container">
      <div>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Time</th>
            <th>Bet</th>
            <th>Multiplier</th>
            <th>Payout</th>
          </tr>
        </thead>
        <tbody>
          {bets.map((el, i) => {
            return <MyBetsCard key={i} bet={el} />;
          })}
        </tbody>
      </table>
      </div>
      <div>
      <table>
        <thead>
          <tr>
            <th>Game</th>
            <th>Time</th>
            <th>Bet</th>
            <th>Multiplier</th>
            <th>Payout</th>
          </tr>
        </thead>
        <tbody>
          {pendingBets.map((el, i) => {
            return <PendingBets key={i} bet={el} />;
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default MyBets;
