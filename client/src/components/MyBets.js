import React from "react";
import { useState, useEffect } from "react";
import MyBetsCard from "./MyBetsCard";
function MyBets({ setLoggedUser, loggedUser }) {
  const [bets, setBets] = useState([]);

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
        console.log(data);
      });
  }, []);

  return (
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
  );
}

export default MyBets;
