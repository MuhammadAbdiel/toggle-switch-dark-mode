import React from "react";
import "./HomePage.css";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      darkMode: false,
    };
  }

  handleChange() {
    this.setState((state) => ({
      darkMode: !state.darkMode,
    }));
  }

  render() {
    return (
      <div className={this.state.darkMode ? "container-dark" : "container"}>
        <label className="switch">
          <input onChange={this.handleChange} type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
    );
  }
}

export default HomePage;
