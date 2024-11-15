import React from "react";
import GrandChild from "./GrandChild";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + " " + "Child Constructor");
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    // console.log(this.props.name + " " + "Child ComponentDidMount");
  }

  render() {
    // console.log(this.props.name + " " + "Child Render is Called");
    const { firstName, lastName, age } = this.props;
    return (
      <div className="user-container">
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase
        </button>
        <h2>{`${firstName} ${lastName}`}</h2>
        <h4>{age}</h4>
      </div>
    );
  }
}

export default UserClass;
