import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddItemForm from "./components/forms/AddItemForm";
import ReserveAppointmentForm from "./components/forms/ReserveAppointmentForm";

const App = () => (
  <Router>
    <div>
      <Navbar />
      <homepage />
      <Routes>
        <Route path="/add" component={AddItemForm} />
        <Route path="/reserve" component={ReserveAppointmentForm} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  </Router>
);

export default App;
