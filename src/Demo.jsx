import {useQuery} from "@apollo/client";
import gql from 'graphql-tag';
const allUsers = gql`
  {
    users {
      name
      email
      postsCount
    }
  }
`

const Demo = () => {
  const {loading, error, data} = useQuery(allUsers);

  if (loading) {
    return <span>Loading...</span>
  }
  if (error) {
    return <span>`Error ${error.message}`</span>
  }

  return (
    <div>
      {data.users.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

export default Demo;
