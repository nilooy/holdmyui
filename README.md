# holdmyui ✋

=======

> A react component to hold the user to interact with the interface while loading data in background or do some work

[![NPM](https://img.shields.io/npm/v/holdmyui.svg)](https://www.npmjs.com/package/holdmyui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## [DEMO](https://theprogboy.github.io/holdmyui/)

## Install

```bash
npm install --save holdmyui
```

## Usage

```jsx
import React, { Component } from "react";

import HoldMyUi from "holdmyui";
```

Need to pass a state as a 'when' prop in HoldMyUi Component

###Using Class based component

```jsx
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
      <HoldMyUi when={isLoading} preloader="Ring">
        Content here..............
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          amet eos odio tenetur, dignissimos vitae quaerat voluptatum omnis fuga
          sequi porro fugiat eligendi cum animi nemo ab. Perspiciatis, nesciunt
          aliquid.
        </h1>
      </HoldMyUi>
    );
  }
}
```

### Using a Hooks

```jsx
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
    <HoldMyUi when={loading} preloader="Ring">
      Content here..............
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti amet
        eos odio tenetur, dignissimos vitae quaerat voluptatum omnis fuga sequi
        porro fugiat eligendi cum animi nemo ab. Perspiciatis, nesciunt aliquid.
      </h1>
    </HoldMyUi>
  );
};
```

##Props

- ###when: Boolean (A state need to be passed here)

- ###preloader: String :

1. Circle
2. Facebook
3. Spinner
4. Default
5. Grid
6. Ring
7. DualRing
8. Heart
9. Ripple
10. Ellipsis
11. HourGlass
12. Roller
13. Gif (need to pass with gifSrc props: a valid gif source/link)
    (Can be selected from 14 predefined loading animation from loading.io/css)

- transition : String . Default: '.7s'
- color : String. Default: '#000 / black'
- bgColor: String . Default: 'white'
- zIndex: String/integer. Default: 99999
- cursor: String (Valid css cursor) Default: 'wait'
- opacity (Float 0 > 1) : Default: 0.7
- preloaderTop: String Default: '20%'
- padding: String Default: '20px'
- type: String. Default: 'absolute' (For global use fixed)
- gifSrc: String, (Write gif source here)

## License

MIT © [](https://raw.githubusercontent.com/reznil/holdmyui/master/LICENSE)
