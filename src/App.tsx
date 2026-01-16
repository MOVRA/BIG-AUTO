import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router";
import AuthLayout from "./layout/AuthLayout";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
