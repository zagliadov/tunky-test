import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "../AboutUs/AboutUs";
import { Layout } from "../Layout/Layout";
import { PartnerView } from "../PartnerView/PartnerView";
import { Home } from "../Home/Home";

export const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="partner-view" element={<PartnerView />} />
        <Route path="about-us" element={<AboutUs />} /> 
      </Route>
    </Routes>
  );
};
