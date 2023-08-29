import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/privateRoute";
import ProtectedRoute from "./components/protectedRoute";
import { UserProvider } from "./context/UserContext";
import { NewsProvider } from "./context/NewsContext";
import Profile from "./pages/Profile";
import SinglePage from "./pages/SinglePage";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
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
          <Route path="/news/:id" element={<SinglePage />} />
        </Routes>
      </NewsProvider>
      <ToastContainer />
    </UserProvider>
  );
};

export default App;
