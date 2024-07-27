import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PostsPage from "./pages/PostsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "./helpers/authContext";


export default function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Header/>
        <main>
          {isAuth ? (
            <Routes>
              <Route path="/" element={<PostsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )}
        </main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
