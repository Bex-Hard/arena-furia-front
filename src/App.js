import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LandingPage from './pages/landingpage/landingpage';
import LoginPage from './pages/login/login';
import RegisterPage from './pages/register/register';
import ChatRoomPage from './pages/chatroom/chatroom-page';
import ProtectedRoute from './routes/protectedRoute';

function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
                path="/chatroom"
                element={
                  <ProtectedRoute>
                    <ChatRoomPage />
                  </ProtectedRoute>
                }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}

export default App;
