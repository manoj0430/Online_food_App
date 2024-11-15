import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor() {
    super();
    // console.log("Parent Constructor");

    this.state = {
      userInfo: {
        firstName: "Manoj",
        lastName: "L",
        age: "19",
      },
    };
  }

  async componentDidMount() {
    // console.log("Parent ComponentDidMount");
    const data = await fetch("https://dummyjson.com/users/1");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
  render() {
    // console.log("Parent Render is Called");
    const { firstName, lastName, age } = this.state.userInfo;
    return (
      <>
        <h1>About</h1>
        <h2> This is Same Food App</h2>
        <UserClass firstName={firstName} lastName={lastName} age={age} />
      </>
    );
  }
}
// const About = () => {
//   return (
//     <>
//       <h1>About</h1>
//       <h2> This is Same Food App</h2>
//       <User />
//       <UserClass name={"Manoj L"} location={"Hanamkonda"} />
//     </>
//   );
// };

export default About;
