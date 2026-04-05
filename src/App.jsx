import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Chat from "./pages/Chat";
import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import DetailsForm from "./pages/DetailsForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/details" element={<DetailsForm />} /> 
      <Route path="/chat" element={<Chat />} />
      {/* <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <Chat />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}
