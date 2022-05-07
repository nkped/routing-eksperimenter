import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <div>
      Blog -layout, plus link til BlogPosts:
      <main>
        <Link to="blogpost">Se Blog Posts!</Link>
      </main>
      <Outlet />
    </div>
  );
}

export default Blog;
