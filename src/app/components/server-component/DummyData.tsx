export default async function DummyData() {
  const response = await fetch("https://dummyjson.com/comments", {
    next: { revalidate: 3600 },
  });
  const data = await response.json();

  type Comment = {
    id: number;
    body: string;
  };

  return (
    <ul>
      {data.comments.map((comment: Comment) => (
        <li key={comment.id}>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  );
}
