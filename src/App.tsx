import Home from "./pages/Home";
import AppLayout from "./layout/AppLayout";
import { Route, Routes } from "react-router";

export default function App() {
  return (
    <Routes>
      <Route path="/sign-in" />
      <Route path="/register" />

      <Route element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
