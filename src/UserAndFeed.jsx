import { gql, useQuery } from 'urql';

export const GetUserQuery = gql`
  query {
    user {
      id
      name
    }
  }
`;

export const GetFeedQuery = gql`
  query {
    feed {
      id
      title
    }
  }
`;

export const UserAndFeed = () => {
  const [userResult] = useQuery({ query: GetUserQuery });
  const {
    data: userData,
    fetching: userFetching,
    error: userError
  } = userResult;

  const [feedResult] = useQuery({ query: GetFeedQuery });
  const {
    data: feedData,
    fetching: feedFetching,
    error: feedError
  } = feedResult;

  if (userFetching || feedFetching) return <p>Loading...</p>;
  if (userError) return <p>Oh no...{userError.message}</p>;
  if (feedError) return <p>Oh no...{feedError.message}</p>;

  return (
    <div>
      <div>
        ({userData.user.id}){userData.user.name}
      </div>
      <div>
        <ul>
          {feedData.feed.map((f) => (
            <li key={f.id}>{f.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
