import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <Head>
        <title>About Me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />

      <main className={styles.main}>
        <Image
          src="catcam-talking-steam.gif"
          alt="Profile animation"
          width={150}
          height={150}
          className={styles.avatar}
          unoptimized
        />
        <h1>About Me</h1>
        <div className={styles.aboutContent}>
          <p>
            You finally awake. Welcome to my portfolio! I am a software developer in Sweden. I am currently studying at
            KTH Royal Institute of Technology in Cyber Security. I like to work with self host stuff and DevOps
            technology. Outside of work, I also used to spend time in my theater club as a set design and actor. I am
            also a big fan of board game and interested in video development.
          </p>
        </div>
      </main>
    </div>
  );
}
