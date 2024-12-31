import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="container col-12">
        <Jumbotron></Jumbotron>
        <div className="row flex-wrap d-flex text-center">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
