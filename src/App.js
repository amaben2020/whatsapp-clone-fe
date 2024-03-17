import { useJwt } from "react-jwt";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import * as View from "./Views";
function App() {
  const { user } = useSelector((state) => state.user);
  const token = user.token;

  const { isExpired, decodedToken } = useJwt(token);

  return (
    <Routes>
      <Route
        path="/"
        element={!isExpired ? <View.Home /> : <Navigate to="/login" />}
      />

      <Route
        path="/register"
        element={decodedToken?.userId ? <Navigate to="/" /> : <View.Register />}
      />
      <Route
        exact
        path="/login"
        element={isExpired ? <View.Login /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
