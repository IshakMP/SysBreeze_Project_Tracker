import { useMutation } from '@apollo/client';
import {FaTrash} from 'react-icons/fa'
import { DELETE_CLIENTS } from '../requests/clientsMutation';
import { GET_CLIENTS } from '../requests/clientsQuery';

export default function ClientRow({ client }) {

  const [deleteClient] = useMutation(DELETE_CLIENTS, {
    variables: {id: client.id},
    refetchQueries: [{query:GET_CLIENTS}]
  }
    
    )

  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient} >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
          