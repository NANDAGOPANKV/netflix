import { NavBar } from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";

// pages
import { Home } from "./pages/home/Home";
import { SignIn } from "./pages/auth/SignIn";
import { Signup } from "./pages/auth/Signup";
// context
import { AuthContextProvider } from "./context/authContext/AuthContext";
import { Account } from "./pages/account/Account";
import { ProtectedRoute } from "./pages/auth/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1 className="text-white">Error</h1>} />
          <Route />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
