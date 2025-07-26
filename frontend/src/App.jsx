import { gql, useQuery } from "@apollo/client";

const BOOKS = gql`
  query Test {
    test {
      title
      author
    }
  }
`;

export default function Books() {
  const { loading, error, data } = useQuery(BOOKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      {data.test.map(({ title, author }) => (
        <div key={title}>
          <p>Title: {title}</p>
          <p>Author: {author}</p>
        </div>
      ))}
    </>
  );
}
