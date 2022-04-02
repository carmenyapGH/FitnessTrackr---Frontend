import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchActivities, userInfo } from "../api";
import { Link } from "react-router-dom";

const Activities = ({ setToken, setUserdata }) => {
  const [activities, setActivities] = useState("");

  useEffect(() => {
    fetchActivities().then((activities) => {
      setActivities(activities);
    });
  }, []);

  return (
    <>
      <Link to="/NewActivity">ADD ACTIVITY</Link>
      <div className="activities-detail">
        {activities &&
          activities.map(({ id, name, description }) => {
            return (
              <div key={id}>
                <h3>{name} </h3>
                <h4> {description}</h4>
                <Link to={`/EditActivity/${id}`}>EDIT ACTIVITY</Link>
              </div>
            );
          })}
        {console.log(activities)}
      </div>
    </>
  );
};

export default Activities;
