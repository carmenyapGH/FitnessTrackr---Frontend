const Home = (props) => {
  const setUserdata = props.setUserdata;
  const userdata = props.userdata;

  const lGreet = (
    <div className="homePage">
      {userdata && <h1 className="Greeting">Welcome to Fitness Tracker! </h1>}
      {userdata && <h2 className="Log">Logged in as {userdata.username}</h2>}
    </div>
  );

  const dGreeting = (
    <div className="defaultHome">
      <h1>Welcome to Fitness Tracker! </h1>
      <h2>Feel Free to Browse Around</h2>
      {/* <div className="Q">
        <h4> Quote of the Day</h4>
        <h3>
          Each New Day Is A New Opportunity To Improve Yourself TAKE IT And Make
          The Most Of It
        </h3>
      </div> */}
    </div>
  );

  return <div className="homePage">{userdata ? lGreet : dGreeting}</div>;
};

export default Home;
