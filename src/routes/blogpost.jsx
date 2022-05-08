import { useParams } from "react-router";

function BlogPost() {
  let params = useParams();

  return (
    <main>
      <h2>{params.blogpostId}</h2>
    </main>
  );
}

export default BlogPost;
