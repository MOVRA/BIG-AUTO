import Navbar from "./Navbar";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import AuthProvider from "../providers/AuthProvider";

export default function AppLayout() {
  return (
    <AuthProvider>
      <Toaster />
      <header>
        <Navbar />
      </header>
      <main className="flex justify-center">
        <Outlet />
      </main>
      <footer></footer>
    </AuthProvider>
  );
}
