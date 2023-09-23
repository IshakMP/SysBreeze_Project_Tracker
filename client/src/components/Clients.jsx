import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../requests/clientQueries";
import Spinner from "./Spinner";

export default function Clients() {
  const { loading, err, data } = useQuery(GET_CLIENTS);
  console.log(loading, err, data);

  if (loading) return <Spinner />;
  if (err) return `Error Check! ${err.message}`;
  return (
    <>
      {!loading && !err && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
