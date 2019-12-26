import React, { Component } from "react";
import HoldMyUi from "holdmyui";
import ContentBox from "./components/ContentBox";
import Sidebar from "./components/Sidebar";
import CodeBlock from "./components/CodeBlock";

export default class App extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    loading: true,
    preloader: "Ring",
    color: "#000000",
    bgColor: "#ffffff",
    opacity: "70",
    preloaderTop: "40"
  };

  handleChange(event) {
    const elem = event.target;

    const value = event.hex
      ? event.hex
      : elem.type === "checkbox"
      ? elem.checked
      : elem.value;

    const name = event.hex ? event.name : event.target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <Sidebar
          opacity={(this.state.opacity * 0.01).toFixed(1)}
          color={this.state.color}
          bgColor={this.state.bgColor}
          preloaderTop={this.state.preloaderTop}
          handleChange={this.handleChange}
        />

        <main>
          <div className="row">
            <div className="col m6">
              <h3>Code</h3>
              <CodeBlock {...this.state} />
            </div>
            <div className="col m6">
              <h3>Preview</h3>
              {this.state.preloader && (
                <HoldMyUi
                  when={this.state.loading}
                  preloader={this.state.preloader}
                  color={this.state.color}
                  bgColor={this.state.bgColor}
                  opacity={(this.state.opacity * 0.01).toFixed(1)}
                  preloaderTop={this.state.preloaderTop + "%"}
                >
                  <ContentBox />
                </HoldMyUi>
              )}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
