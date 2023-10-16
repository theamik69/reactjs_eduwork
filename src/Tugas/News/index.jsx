import React from "react";
import Hero from "./Hero";
import Card from "./Card";

export default class News extends React.Component {
  render() {
    const marginTop = {
      height: "80px",
      marginTop: "10px",
    };
    return (
      <div>
        <div style={marginTop} className="bg-black border border-black Width auto d-flex justify-content-end align-items-center pe-3"></div>
        <Hero />
        <Card />
      </div>
    );
  }
}
