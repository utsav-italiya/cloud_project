import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homePage';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path={path.LOGIN} element={<LoginPage />} /> */}
        <Route path='/' element={<HomePage />} />
        {/* <Route path={path.VERIFY_EMAIL} element={<VerifyEmailPage />} />
        <Route path={path.SECOND_FACTOR} element={<RegisterQuestionAnswerPage />} />
        <Route path={path.LOGIN} element={<LoginPage />} /> */}
        {/* <Route path={path.FORGOT_PASSWORD} element={<ForgotPasswordPage />} />
        <Route path={path.RESET_PASSWORD} element={<ResetPasswordPage />} />
        <ProtectedRoute path="/" element={<HomePage />} />
        <ProtectedRoute path="/profile" element={<ProfilePage />} />
        <ProtectedRoute path="/lobby" element={<LobbyView />} />
        <ProtectedRoute path="/editProfile" element={<EditProfile />} />  */}
      </Routes>
    </>
  );
}

export default App;

