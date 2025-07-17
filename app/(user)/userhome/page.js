const Userhome = () => {
  return (
    <>
      <div className="userhome-container">
        <div className="header">
          <a href="/userhome">Home</a>
          <a href="/blog">Blog</a>
          <a href="/userlogin">Login</a>
        </div>

        <div className="userhome-content">
          <h1>User Home Page</h1>
          <p>Welcome to your food blog hub!</p>
          <p>Explore recipes, read cooking tips, and get inspired by food lovers around the world.</p>
        </div>
      </div>
    </>
  );
};

export default Userhome;
