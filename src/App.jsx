import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/privateRoute";
import ProtectedRoute from "./components/protectedRoute";
import { UserProvider } from "./context/UserContext";
import { NewsProvider } from "./context/NewsContext";
import Profile from "./pages/Profile";
const App = () => {
  return (
    <UserProvider>
      <NewsProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <SignIn />
              </ProtectedRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <ProtectedRoute>
                <SignUp />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
        </Routes>
      </NewsProvider>
    </UserProvider>
  );
};

export default App;
