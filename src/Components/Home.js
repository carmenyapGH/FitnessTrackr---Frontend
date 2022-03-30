const Home = (props) => {
  const setUserdata = props.setUserdata;
  const userdata = props.userdata;

  return (
    <div className="home-form">
      {userdata && <h1>Welcome to Fitness Tracker! </h1>}
      {userdata && <h2>Logged in as {userdata.username}</h2>}
    </div>
  );
};

export default Home;
