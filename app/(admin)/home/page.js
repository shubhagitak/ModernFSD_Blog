import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div className="blg">
        <div className="header">
          <Link href="/home">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/login">Login</Link>
        </div>
        <div>
          <h1>Admin Home Page</h1>
        </div>
      </div>
      <h3>
        This is the home page of the Admin. As an Admin you can add and update many food blogs here.
      </h3>
    </>
  );
};

export default Home;
