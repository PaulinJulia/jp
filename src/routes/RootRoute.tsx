import { ScrollToTop } from "@/components/ScrollToTop";
import { Outlet } from "react-router-dom";

export default function RootRoute() {
  return (
    <>
      <div id="detail">
        <ScrollToTop />
        <Outlet />
      </div>
    </>
  );
}
