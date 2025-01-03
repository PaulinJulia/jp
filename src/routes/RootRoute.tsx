import { Outlet } from "react-router-dom";

export default function RootRoute() {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
