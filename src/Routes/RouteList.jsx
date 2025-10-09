import { Routes, Route } from "react-router-dom";
import UnyForm from "../components/UnyForm.jsx";
import UserList from "../Pages/UserList.jsx";

export default function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<UnyForm />} />
      <Route path="/users" element={<UserList />} />
      <Route path="*" element={<h1>Page Not Found</h1>} />
    </Routes>
  );
}
