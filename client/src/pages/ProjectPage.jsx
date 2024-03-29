import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { GET_A_PROJECT } from "../requests/projectQueries";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import EditProjectForm from "../components/EditProjectForm";


export default function ProjectPage() {
  const { id } = useParams();
  const { loading, err, data } = useQuery(GET_A_PROJECT, {
    variables: { id },
  });
  if (loading) return <Spinner />;
  if (err) return <h1>Something went wrong</h1>;

  return (
    <>
      {!loading && !err && (
        <div className="mx-auto w-75 card p-5">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className="mt-3">Project Status</h5>
          <p className="lead">{data.project.status}</p>

          <ClientInfo client={data.project.client} />

          <EditProjectForm project={data.project} />

          {/* <DeleteProjectButton projectId={data.project.id} /> */}
        </div>
      )}
    </>
  );
}
