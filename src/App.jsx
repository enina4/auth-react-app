import { Routes, Route } from "react-router-dom";

//layout
import AuthLayout from "./layouts/auth/AuthLayout";

//pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import Error404 from "./pages/404";
function App() {
  return (
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="forget-password" element={<ForgetPassword />}></Route>
          <Route path="change-password:/token" element={<ChangePassword />}></Route>
        </Route>
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
  );
}

export default App;
