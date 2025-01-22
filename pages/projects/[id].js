import { useRouter } from "next/router";
import projectsData from "../../data/projectsData";
import styles from "../../styles/Home.module.css";

const ProjectDetail = ({ project }) => {
  const router = useRouter();

  // Fallback for when the project is not found
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.main}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Render services if they exist */}
      {project.services && (
        <div>
          <h3>Services:</h3>
          <ul>
            {project.services.map((service, index) => (
              <li key={index}>
                <strong>{service.name}</strong> - {service.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export async function getStaticPaths() {
  const paths = projectsData.map((project) => ({
    params: { id: project.id },
  }));

  return { paths, fallback: false }; // Set fallback to true if you want to allow new projects to be added dynamically
}

export async function getStaticProps({ params }) {
  const project = projectsData.find((p) => p.id === params.id);

  return {
    props: {
      project,
    },
  };
}

export default ProjectDetail;
