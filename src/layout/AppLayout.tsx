import Navbar from "./Navbar";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
