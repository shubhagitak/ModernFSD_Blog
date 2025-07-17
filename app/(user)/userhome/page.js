import Link from 'next/link';

const Userhome = () => {
  return (
    <>
      <div className="userhome-container">
        <div className="header">
          <Link href="/userhome">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/userlogin">Login</Link>
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
