import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ActorListItem.css";

function ActorListItem({ actor }) {
  const [actorInfo, setActorInfo] = useState({
    actor_id: "",
    actor_name: "",
    actor_profile: "",
  });

  useEffect(() => {
    const getActorsInfo = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/movies/actors/${actor}`
        );
        setActorInfo({
          actor_id: response.data.id,
          actor_name: response.data.name,
          actor_profile: response.data.profile_path,
        });
      } catch (error) {
        console.error("Failed to fetch actor info:", error);
      }
    };

    getActorsInfo();
  }, [actor]);

  return (
    <div className="actor-box">
      <div className="photo-container">
        <img
          src={actorInfo.actor_profile}
          alt={actorInfo.actor_name}
          className="actor_pic"
        />
      </div>
      <h6>{actorInfo.actor_name}</h6>
    </div>
  );
}

export default ActorListItem;
