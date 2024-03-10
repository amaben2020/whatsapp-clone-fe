import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import * as View from "./Views";
function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <Routes>
      <Route
        path="/"
        element={user.token ? <View.Home /> : <Navigate to="/login" />}
      />

      <Route
        path="/register"
        element={!user.token ? <View.Register /> : <Navigate to="/" />}
      />
      <Route
        exact
        path="/login"
        element={!user.token ? <View.Login /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
