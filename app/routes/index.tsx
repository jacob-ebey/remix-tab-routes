import { Link } from "remix";

export default function Index() {
  return (
    <div className="w3-container">
      <h1>Welcome to Remix</h1>
      <p>
        <Link to="/tabs">Tabs Route</Link>
      </p>
    </div>
  );
}
