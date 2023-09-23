import { useQuery } from "@apollo/client";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../requests/projectQueries";

export default function Projects() {
  const { loading, err, data } = useQuery(GET_PROJECTS);

  if (loading) return <div></div>;
  if (err) return <div>Something went wrong</div>;
  // console.log(loading, err, data);

  if (data.projects.length > 0) {
    return (
      <>
        <div className="row mt-4">
          {data.projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </>
    );
  }
  return <p>No Projects</p>;
}
