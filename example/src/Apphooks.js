import React, { useState, useEffect } from "react";

import HoldMyUi from "holdmyui";

const App = () => {
  const [loading, setLoading] = useState(false);

  // Now update the state wherever you need to hide/show the holder
  // For example i'm changing with seTimeout
  useState(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <button
        style={{ position: "fixed", zIndex: 9999999 }}
        onClick={() => this.setState({ change: !this.state.change })}
      >
        Toggle
      </button>

      <HoldMyUi
        when={this.state.change}
        preloader="Gif"
        gifSrc="https://i.pinimg.com/originals/a4/f2/cb/a4f2cb80ff2ae2772e80bf30e9d78d4c.gif"
        color="red"
        bgColor="black"
        disableScroll={true}
      >
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          amet eos odio tenetur, dignissimos vitae quaerat voluptatum omnis fuga
          sequi porro fugiat eligendi cum animi nemo ab. Perspiciatis, nesciunt
          aliquid.
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          amet eos odio tenetur, dignissimos vitae quaerat voluptatum omnis fuga
          sequi porro fugiat eligendi cum animi nemo ab. Perspiciatis, nesciunt
          aliquid.
        </h1>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          amet eos odio tenetur, dignissimos vitae quaerat voluptatum omnis fuga
          sequi porro fugiat eligendi cum animi nemo ab. Perspiciatis, nesciunt
          aliquid.
        </h1>
      </HoldMyUi>
    </div>
  );
};
