import React from "react";
import "./homepage.styles.scss";
import Header from "../../components/header/header.component";
import Container from "../../components/container/container.component"
const HomePage = () => (
  <main className="content">
    <Header title="Metrics" />
    <Container/>
  </main>
);

export default HomePage;
