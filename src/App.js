import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="om">Om</Link>
        <Link to="blog">Blog</Link>
      </nav>
      <div>
        <h1>Du er på App.js</h1>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
