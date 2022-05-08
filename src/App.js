import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      App layout- div, plus 3 top nav-links:
      <nav>
        <Link to="/">Home</Link>
        <Link to="/om">Om</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
