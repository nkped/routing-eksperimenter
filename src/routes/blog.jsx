import { NavLink, Outlet } from "react-router-dom";
import { getBlogPosts } from "../data";

export default function Blog() {
  let blogPosts = getBlogPosts();
  return (
    <div>
      Blog layout-div, plus dynamiske links.
      <nav>
        {blogPosts.map((blogPost) => (
          <NavLink to={`/blog/${blogPost.number}`} key={blogPost.number}>
            {blogPost.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}
