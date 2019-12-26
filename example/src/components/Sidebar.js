import React from "react";
import { SketchPicker } from "react-color";

class Sidebar extends React.Component {
  state = {
    showColorPicker: false,
    color: this.props.color,
    bgColor: this.props.bgColor,
    opacity: this.props.opacity,
    preloaderTop: this.props.preloaderTop
  };

  static getDerivedStateFromProps(props, state) {
    let update = {};

    if (props.color !== state.color) update.color = props.color;
    if (props.bgColor !== state.bgColor) update.bgColor = props.bgColor;

    return Object.keys(update).length ? update : null;
  }

  showGif = () => {
    const preloaderList = document.getElementById("preloaderSelect").options;

    const prevSelected = document.getElementById("preloaderSelect").value;

    console.log(prevSelected);

    if (prevSelected !== "Gif") {
      preloaderList[preloaderList.length - 1].selected = true;
      let event = { target: { name: "preloader", value: "Gif" } };
      this.props.handleChange(event);
    } else {
      preloaderList[0].selected = true;
      let event = { target: { name: "preloader", value: "Ring" } };
      this.props.handleChange(event);
    }
  };

  render() {
    return (
      <ul id="slide-out-fixed" className="sidenav sidenav-fixed">
        <div
          className="card-panel cyan darken-2 white-text center-align"
          style={{ fontSize: "20px", padding: "10px" }}
        >
          holdmyui{" "}
          <span role="img" aria-label="sheep">
            ✋
          </span>
        </div>
        <li>
          <div className="switch">
            <label style={{ fontSize: "20px" }}>
              Loading...
              <input
                name="loading"
                onChange={e => this.props.handleChange(e)}
                type="checkbox"
                defaultChecked={true}
              />
              <span className="lever"></span>
            </label>
          </div>
        </li>

        <li>
          <label style={{ fontSize: "20px" }}>Preloaders</label>
          <select
            id="preloaderSelect"
            name="preloader"
            className="browser-default"
            onChange={e => this.props.handleChange(e)}
          >
            {[
              "Ring",
              "Circle",
              "Facebook",
              "Spinner",
              "Default",
              "Grid",
              "DualRing",
              "Heart",
              "Ripple",
              "Ellipsis",
              "HourGlass",
              "Roller",
              "Gif"
            ].map((loader, index) => (
              <option
                key={index}
                value={loader}
                hidden={loader === "Gif" ? true : false}
              >
                {loader}
              </option>
            ))}
          </select>
        </li>

        {/* Color */}
        <li>
          <button
            className="btn"
            style={{
              backgroundColor: this.state.color,
              color: this.state.color === "#ffffff" ? "#000" : "#fff"
            }}
            onClick={() =>
              this.setState({ showColorPicker: !this.state.showColorPicker })
            }
          >
            Color{" "}
            {this.state.showColorPicker ? (
              <span>&uarr;</span>
            ) : (
              <span>&darr;</span>
            )}
          </button>
          {this.state.showColorPicker && (
            <SketchPicker
              color={this.state.color}
              onChangeComplete={e => {
                e.name = "color";
                this.props.handleChange(e);
              }}
              disableAlpha
            />
          )}
        </li>

        {/* Bg Color */}
        <li>
          <button
            className="btn"
            style={{
              backgroundColor: this.state.bgColor,
              color: this.state.bgColor === "#ffffff" ? "#000" : "#fff"
            }}
            onClick={() =>
              this.setState({
                showColorPickerBg: !this.state.showColorPickerBg
              })
            }
          >
            Background Color{" "}
            {this.state.showColorPickerBg ? (
              <span>&uarr;</span>
            ) : (
              <span>&darr;</span>
            )}
          </button>
          {this.state.showColorPickerBg && (
            <SketchPicker
              color={this.state.bgColor}
              onChangeComplete={e => {
                e.name = "bgColor";
                this.props.handleChange(e);
              }}
              disableAlpha
            />
          )}
        </li>

        <li>
          <p className="range-field">
            <label style={{ fontSize: "17px" }}>
              Opacity: {this.props.opacity}
            </label>
            <input
              onChange={e => this.props.handleChange(e)}
              type="range"
              min="0"
              max="100"
              name="opacity"
            />
          </p>
        </li>

        <li>
          <p className="range-field">
            <label style={{ fontSize: "17px" }}>
              preloaderTop: {this.props.preloaderTop}
            </label>
            <input
              onChange={e => this.props.handleChange(e)}
              type="range"
              min="0"
              max="100"
              name="preloaderTop"
            />
          </p>
        </li>

        <li>
          <div className="switch">
            <label style={{ fontSize: "20px" }}>
              Enable Gif
              <input name="gif" onChange={this.showGif} type="checkbox" />
              <span className="lever"></span>
            </label>
          </div>
        </li>
      </ul>
    );
  }
}

export default Sidebar;
