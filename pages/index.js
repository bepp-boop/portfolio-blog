import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <video autoPlay loop muted playsInline className={styles.videoBackground}>
        <source src="/background.webm" type="video/webm" />
      </video>
      <Navbar />
      <main className={styles.main}>
        <h1>Hello! I'm Quang M Nguyen</h1>
        <p>Ms Student Cyber Security</p>
        <div className={styles.socialLinks}>
          <a href="https://github.com/bepp-boop" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/quang-minh-nguyen-43922b1b1/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:quangteoqs15@gmail.com">
            <MdMail />
          </a>
        </div>
      </main>
    </div>
  );
}
