import React from "react";
import Preloader from "./loaders";

class HoldMyUi extends React.Component {
  constructor(props) {
    super(props);

    this.when = this.props.when;
    this.containerClass = this.props.containerClass;
    this.holderClass = this.props.holderClass;
    this.preloader = this.props.preloader;
    this.disablePreloader = this.props.disablePreloader;

    this.transition = this.props.transition || ".7s";
    this.color = this.props.color || "#000";
    this.bgColor = this.props.bgColor || "white";
    this.zIndex = this.props.zIndex || "999999";
    this.cursor = this.props.cursor || "wait";
    this.opacity = this.props.opacity || ".7";
    this.preloaderTop = this.props.preloaderTop || "20%";
    this.padding = this.props.padding || "20px";
    this.type = this.props.type || "absolute";
    this.gifSrc = this.props.gifSrc;

    this.disableScroll = this.props.disableScroll;
  }

  state = {
    shouldHide: this.props.when || true,
    preloader: this.props.preloader,
    color: this.props.color || "#000",
    bgColor: this.props.bgColor || "#fff"
  };

  static getDerivedStateFromProps(props, state) {
    let update = {};

    // props.map((item, index) => {});

    if (props.when === "undefined") update.shouldHide = true;

    if (props.when !== state.shouldHide) {
      update.shouldHide = props.when;
    }

    if (props.preloader && props.preloader !== state.preloader) {
      update.preloader = props.preloader;
    }

    if (props.color && props.color !== state.color) update.color = props.color;

    if (props.bgColor && props.bgColor !== state.bgColor)
      update.bgColor = props.bgColor;

    return Object.keys(update).length ? update : null;
  }

  preloaderContainer = () => (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        top: this.props.preloaderTop || "40"
      }}
    >
      {this.state.preloader && (
        <Preloader
          preloader={this.state.preloader}
          color={this.state.color}
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
            cursor: this.cursor,
            backgroundColor: this.state.bgColor,
            transition: this.transition,
            visibility: this.state.shouldHide ? "visible" : "hidden",
            opacity: this.state.shouldHide ? this.props.opacity || 0.7 : 0
          }}
        >
          {!this.disablePreloader && this.preloaderContainer()}
        </div>
        {this.props.children}
      </div>
    );
  }

  render() {
    return this.holderElement();
  }
}

export default HoldMyUi;
