import React from "react";
import "./homepage.styles.scss";
import Header from "../../components/header/header.component";
import ChartContainer from "../../components/chartContainer/chartContainer.component"
const HomePage = () => (
  <main className="content">
    <Header title="Metrics" />
    <div className="container">
      <ChartContainer/>
      <div className="form-container">Form Container</div>
    </div>
  </main>
);

export default HomePage;
