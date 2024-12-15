import Head from "next/head";
import styles from "../styles/About.module.css";
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

      <main className={styles.aboutContainer}>
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
          <p className={styles.aboutText}>
            Hey, you. You’re finally awake. You were trying to solve that coding problem, right? Walked right into the
            maze of bugs, same as us, and that CI/CD pipeline over there. Welcome to my portfolio! I’m a software
            developer based in Sweden, currently studying Cyber Security at KTH Royal Institute of Technology. My
            journey doesn’t stop at code—I enjoy exploring the realms of self-hosted setups and DevOps technology,
            crafting systems that are as efficient as they are resilient. When I step away from the keyboard, I channel
            my creativity through theater, where I’ve worked as both a set designer and actor. I’m also an avid board
            game enthusiast and fascinated by video production. Combining these passions, I love bringing stories to
            life through immersive, tech-infused experiences.
          </p>
        </div>
      </main>
    </div>
  );
}
