import React from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const EditActivity = ({ activities, fetchActivities, token }) => {
  const [singleActivity, setSingleActivity] = useState({});
  const [activityName, setActivityName] = useState("");
  const [activityDesc, setActivityDesc] = useState("");
  useEffect(() => {
    // console.log(id);
    if (activities.length > 0) {
      setSingleActivity(activities.find((activity) => activity.id === +id));
    }
  }, [activities]);
  useEffect(() => {
    setActivityName(singleActivity.name);
    setActivityDesc(singleActivity.description);
  }, [singleActivity]);
  const { id } = useParams();
  // console.log(id);

  const updateActivity = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/activities/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: activityName,
        description: activityDesc,
      }),
    });
  };

  return (
    <>
      <div className="activities-singleView">
        <h3>{activityName}</h3>
        <h4>{activityDesc}</h4>
        <form id="updateActivity" onSubmit={(e) => updateActivity(e)}>
          <input
            type="text"
            value={activityName}
            onChange={(e) => setActivityName(e.target.value)}
          />
          <input
            type="text"
            value={activityDesc}
            onChange={(e) => setActivityDesc(e.target.value)}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default EditActivity;
