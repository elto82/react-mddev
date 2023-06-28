import React from "react";
import "./index.css";
import TwitterFollowCard from "./components/TwitterFollowCard";

const App = () => {
  const users = [
    {
      userName: "elto82",
      name: "Argiro ",
      isFollowing: true,
    },
    {
      userName: "midudev",
      name: "Miguel Angel",
      isFollowing: true,
    },
    {
      userName: "elonmusk",
      name: "Elon Musk",
      isFollowing: true,
    },
    {
      userName: "BarackObama",
      name: "Barack Obama",
      isFollowing: false,
    },
    {
      userName: "selenagomez",
      name: "Selena Gomez",
      isFollowing: true,
    },
    {
      userName: "BillGates",
      name: "Bill Gates",
      isFollowing: true,
    },
  ];

  return (
    <div className="App">
      {users.map((user) => {
        const { userName, name, isFollowing } = user;

        return (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        );
      })}
    </div>
  );
};

export default App;
