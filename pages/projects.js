import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Link from "next/link";
import projectsData from "../data/projectsData";

export default function Projects() {
  // Sort projects by year (newest first)
  const sortedProjects = projectsData.sort((a, b) => b.year - a.year);

  // Group projects by year
  const projectsByYear = sortedProjects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {});

  return (
    <div>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1>My Hobby and Serious Projects</h1>
        {Object.keys(projectsByYear)
          .sort((a, b) => b - a) // Sort years in descending order
          .map((year) => (
            <section key={year}>
              <h2 className={styles.yearHeading}>{year}</h2>
              <div className={styles.projectGrid}>
                {projectsByYear[year].map((project) => (
                  <div key={project.id} className={styles.projectCard}>
                    <Link href={`/projects/${project.id}`}>
                      <h2>{project.title}</h2>
                    </Link>
                    <p>{project.short}</p>
                  </div>
                ))}
              </div>
            </section>
          ))}
      </main>
    </div>
  );
}
