import { useSelector } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.css";
import PageLayout from "./Layout/PageLayout";
import * as View from "./Views";
function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <PageLayout>
      <Router>
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
            path="/login"
            element={!user.token ? <View.Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </PageLayout>
  );
}

export default App;
