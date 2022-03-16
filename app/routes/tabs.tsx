import { redirect, Link, Outlet } from "remix";
import type { LoaderFunction } from "remix";

export let loader: LoaderFunction = ({ request }) => {
  let url = new URL(request.url);
  if (url.pathname.match(/^\/tabs\/?$/)) {
    return redirect("/tabs/a");
  }

  return null;
};

export default function Tabs() {
  return (
    <>
      <div className="w3-container">
        <h1>Tabs Layout Route</h1>
        <p>
          <Link to="/">Go back home</Link>
        </p>
      </div>

      <div className="w3-bar w3-black">
        <Link to="/tabs/a" className="w3-bar-item w3-button">
          A
        </Link>
        <Link to="/tabs/b" className="w3-bar-item w3-button">
          B
        </Link>
        <Link to="/tabs/c" className="w3-bar-item w3-button">
          C
        </Link>
      </div>

      <div className="w3-container city">
        <Outlet />
      </div>
    </>
  );
}
