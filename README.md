# holdmyui ✋

> A react component to hold the user to interact with the interface while loading data in background or do some work

[![NPM](https://img.shields.io/npm/v/holdmyui.svg)](https://www.npmjs.com/package/holdmyui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save holdmyui
```

## Usage

```jsx
import React, { Component } from "react";

import HoldMyUi from "holdmyui";

class Example extends Component {
  //Need to pass a state as a 'when' prop in HoldMyUi Component

  state = { isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    i;
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    return (
      <HoldMyUi when={isLoading} preloader="ring">
        <p>Contents.....</p>
      </HoldMyUi>
    );
  }
}
```

## License

MIT © [](https://github.com/)
