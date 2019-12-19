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

  render() {
    const ComponentToRender = Components[this.preloader];

    return <ComponentToRender color={this.color} gifSrc={this.gifSrc} />;
  }
}
