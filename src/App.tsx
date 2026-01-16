import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import AppLayout from "./layout/AppLayout";
import AuthLayout from "./layout/AuthLayout";
import { Route, Routes } from "react-router";
import VehicleDetail from "./pages/VehicleDetail";

export default function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Route>

      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/vehicle/:id" element={<VehicleDetail />} />
      </Route>
    </Routes>
  );
}
