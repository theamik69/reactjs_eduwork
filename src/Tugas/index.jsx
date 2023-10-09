import React from "react";
import ClassComponent from "./Komponen/ClassComponent";
import FungtionalComponent from "./Komponen/FungtionalComponent";
export default class Komponen extends React.Component {
  render() {
    return (
      <div>
        <FungtionalComponent />
        <ClassComponent />
      </div>
    );
  }
}
