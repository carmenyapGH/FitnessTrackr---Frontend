import React, { useState } from "react";
import { BASE_URL } from "../api";

const NewActivity = () => {
  const [newActivity, setnewActivity] = useState("");
  const [activityDesc, setActivityDesc] = useState("");

  const token = localStorage.getItem("token");

  const createActivity = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: newActivity,
        description: activityDesc,
      }),
    });
    const activity = response.json();
    console.log(activity);
    fetch(`${BASE_URL}/activities`);
    history.push("/Activities");
  };

  return (
    <>
      <div id="newActivity">
        <form id="createActivity" onSubmit={(e) => createActivity(e)}>
          <input
            placeholder="Activity Name"
            value={newActivity}
            onChange={(e) => setnewActivity(e.target.value)}
          />
          <input
            placeholder="Description"
            value={activityDesc}
            onChange={(e) => setActivityDesc(e.target.value)}
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
};

export default NewActivity;
