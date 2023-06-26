import React, { useState } from "react";
import App from "../App.css";

const TwitterFollowCard = ({ userName = "Unknown", children }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing ? "Seguindo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handelClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="avatar"
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handelClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow"> Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;
