import React from "react";
import ClassComponent from "./Pembahasan/ClassComponent";
import FungtionalKomponent from "./Pembahasan/FungtionalComponent";

export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <FungtionalKomponent name="John" />
        <ClassComponent />
      </div>
    );
  }
}
  