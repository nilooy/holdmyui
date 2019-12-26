import React from "react";
import HoldMyUi from "holdmyui";

class ExampleClass extends React.Component {
  state = {
    loading: false
  };

  render() {
    return (
      <HoldMyUi
        when={this.state.loading}
        preloader="Ring"
        color=""
        bgColor=""
        opacity=""
        preloaderTop=""
      >
        <h1>
          {/* Content Here */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam cum
          ullam aspernatur alias mollitia delectus harum ex eos dolor iste eaque
          molestias, possimus, ab sequi id quos animi iusto repellendus.
        </h1>
      </HoldMyUi>
    );
  }
}
