const Activities = ({ setToken, setUserdata, activities, setActivities }) => {
  console.log("Activity", activities);

  return (
    <>
      <div className="activities-hdr">
        {activities &&
          activities.map(({ id, name, description }) => {
            return (
              <div className="activities-detail" key={id}>
                <h3>{name} </h3>
                <h4> {description}</h4>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Activities;
