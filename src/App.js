// General Imports
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";

// Pages Imports
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import PetsPage from "./pages/PetsPage/PetsPage";
import PetPage from "./pages/PetPage/PetPage";
import AddPetPage from "./pages/AddPetPage/AddPetPage";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import { DashboardProvider } from "./context/DashboardContext";
import { PetsProvider } from "./context/PetsContext";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <DashboardProvider>
                <PetsProvider>
                  <HomePage />
                </PetsProvider>
              </DashboardProvider>
            </PrivateRoute>
          }
        >
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="pets" element={<PetsPage />}>
            <Route
              path=":petId"
              element={<PetPage />}
              key={window.location.pathname}
            />
          </Route>
          <Route path="addpet" element={<AddPetPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;
