import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function Dashboard() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the subsequent screens on your site, like navigation. */}
      <Navbar />

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined on Route component. */}
      <Outlet />
    </div>
  );
}

export default Dashboard;
