import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import AllTrips from "./pages/AllTrips";
import TripDetails from "./pages/TripDetails";
import CreateTrip from "./pages/CreateTrip";
import MyTrips from "./pages/MyTrips";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<AllTrips />} />
        <Route path="/trip/:id" element={<TripDetails />} />
        <Route path="/create" element={<CreateTrip />} />
        <Route path="/my-trips" element={<MyTrips />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}