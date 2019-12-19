import React from "react";
import Preloader from "./loaders";

class HoldMyUi extends React.Component {
  constructor(props) {
    super(props);

    this.when = this.props.when;
    this.containerClass = this.props.containerClass;
    this.holderClass = this.props.holderClass;
    this.children = this.props.children;
    this.preloader = this.props.preloader;

    this.transition = this.props.transition || ".7s";
    this.color = this.props.color || "#000";
    this.bgColor = this.props.bgColor || "white";
    this.zIndex = this.props.zIndex || "999999";
    this.cursor = this.props.cursor || "wait";
    this.opacity = this.props.opacity || ".8";
    this.preloaderTop = this.props.preloaderTop || "20%";
    this.padding = this.props.padding || "20px";
    this.type = this.props.type || "absolute";
    this.gifSrc = this.props.gifSrc;

    this.disableScroll = this.props.disableScroll;
  }

  componentDidMount() {
    console.log(this.padding);
  }

  state = { shouldHide: this.props.when || true };

  static getDerivedStateFromProps(props, state) {
    if (props.when === "undefined") return { shouldHide: true };
    if (props.when !== state.shouldHide) {
      return { shouldHide: props.when };
    }

    return null;
  }

  preloaderContainer = () => (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: this.preloaderTop
      }}
    >
      {this.preloader && (
        <Preloader
          preloader={this.preloader}
          color={this.color}
          gifSrc={this.gifSrc}
        />
      )}
    </div>
  );

  disableScrolling(css) {
    if (css) {
      if (this.state.shouldHide) document.body.style.overflowY = "hidden";
      else document.body.style.overflowY = "scroll";
    } else {
      if (this.state.shouldHide) {
        var x = window.scrollX;
        var y = window.scrollY;
        window.onscroll = function() {
          window.scrollTo(x, y);
        };
      } else {
        window.onscroll = function() {};
      }
    }
  }

  holderElement() {
    return (
      <div
        className={this.containerClass}
        style={{
          position: "relative",
          padding: this.padding
        }}
      >
        {this.disableScroll
          ? this.disableScroll === "css"
            ? this.disableScrolling(true)
            : this.disableScrolling()
          : ""}

        <div
          className={this.holderClass}
          style={{
            position: this.type,
            top: "0",
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: this.zIndex,
            opacity: this.opacity,
            cursor: this.cursor,
            backgroundColor: this.bgColor,
            transition: this.transition,
            visibility: this.state.shouldHide ? "visible" : "hidden",
            opacity: this.state.shouldHide ? this.opacity : 0
          }}
        >
          {this.preloaderContainer()}
        </div>
        {this.children}
      </div>
    );
  }

  render() {
    return this.holderElement();
  }
}

export default HoldMyUi;
