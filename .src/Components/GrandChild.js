import React from "react";

class GrandChild extends React.Component {
  constructor() {
    super();
    console.log("grand child constructor");
  }

  componentDidMount() {
    console.log("grand child ComponentDidMount");
  }
  render() {
    console.log("grand child render");
    return (
      <>
        <h1> GrandChild</h1>
      </>
    );
  }
}

export default GrandChild;
