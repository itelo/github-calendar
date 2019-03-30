import React from "react";
import "./Tooltip.css";

export default class Tooltip extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      displayTooltip: false
    };
    this.hideTooltip = this.hideTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
  }

  hideTooltip() {
    this.setState({ displayTooltip: false });
  }
  showTooltip() {
    this.setState({ displayTooltip: true });
  }

  render() {
    let message = this.props.message;
    let position = this.props.position;
    return (
      <div
        data-testid="tooltip"
        className="tooltip"
        onMouseLeave={this.hideTooltip}
      >
        {this.state.displayTooltip && (
          <div
            data-testid="tooltip-bubble"
            className={`tooltip-bubble tooltip-${position}`}
            onMouseOver={this.hideTooltip}
          >
            <div data-testid="tooltip-message" className="tooltip-message">
              {message}
            </div>
          </div>
        )}
        <div
          data-testid="tooltip-trigger"
          className="tooltip-trigger"
          onMouseOver={this.showTooltip}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
