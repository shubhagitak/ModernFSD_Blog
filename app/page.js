import Image from "next/image";
import styles from "./page.module.css";
import Blog from "./(user)/blog/page";

export default function Home() {
  return (
    <>
    <div className="header">
        {/* <a href="/userhome">Home</a> */}
        {/* <a href = "/userabout">About</a> */}
        {/* <a href ="/blog">Blog</a> */}
        <a href ="/userlogin">Login</a>
    </div>
    <div className={styles.page}>
        <h1>Welcome to our food blog page</h1>
        <p>You can explore many food blogs here</p>
        <Blog></Blog>
    </div>
    </>
  );
}
