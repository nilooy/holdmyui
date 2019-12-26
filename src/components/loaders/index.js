import React from "react";

import Circle from "./Circle";
import Facebook from "./Facebook";
import Spinner from "./Spinner";
import Default from "./Default";
import Grid from "./Grid";
import Ring from "./Ring";
import DualRing from "./DualRing";
import Heart from "./Heart";
import Ripple from "./Ripple";
import Ellipsis from "./Ellipsis";
import HourGlass from "./HourGlass";
import Roller from "./Roller";
import Gif from "./Gif";

const Components = {
  Circle,
  Facebook,
  Spinner,
  Default,
  Grid,
  Ring,
  DualRing,
  Heart,
  Ripple,
  Ellipsis,
  HourGlass,
  Roller,
  Gif
};

export default class Preloader extends React.Component {
  constructor(props) {
    super(props);

    this.preloader = this.props.preloader;

    this.color = this.props.color;
    this.gifSrc = this.props.gifSrc;
    this.cssLoader = this.props.cssLoader;
  }

  state = {
    preloader: this.props.preloader,
    color: this.props.color
  };

  static getDerivedStateFromProps(props, state) {
    let update = {};

    if (props.preloader !== state.preloader) update.preloader = props.preloader;

    if (props.color !== state.color) update.color = props.color;

    return Object.keys(update).length ? update : null;
  }

  render() {
    const ComponentToRender = Components[this.state.preloader];

    return <ComponentToRender color={this.state.color} gifSrc={this.gifSrc} />;
  }
}
