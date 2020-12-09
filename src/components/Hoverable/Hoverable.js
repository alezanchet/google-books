import React, { Component } from 'react';

import { element, func, oneOfType } from 'prop-types';

import { isHoverEnabled } from './HoverState';

export default class Hoverable extends Component {
  constructor(props) {
    super(props);
    this.state = { isHovered: false, showHover: true };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleGrant = this.handleGrant.bind(this);
    this.handleRelease = this.handleRelease.bind(this);
  }

  handleMouseEnter(e) {
    const { isHovered } = this.state;

    if (isHoverEnabled() && !isHovered) {
      const { onHoverIn } = this.props;
      if (onHoverIn) onHoverIn();
      this.setState(state => ({ ...state, isHovered: true }));
    }
  }

  handleMouseLeave(e) {
    const { isHovered } = this.state;

    if (isHovered) {
      const { onHoverOut } = this.props;
      if (onHoverOut) onHoverOut();
      this.setState(state => ({ ...state, isHovered: false }));
    }
  }

  handleGrant() {
    this.setState(state => ({ ...state, showHover: false }));
  }

  handleRelease() {
    this.setState(state => ({ ...state, showHover: true }));
  }

  render() {
    const { children } = this.props;
    const { showHover, isHovered } = this.state;
    const child =
      typeof children === 'function'
        ? children(showHover && isHovered)
        : children;

    return React.cloneElement(React.Children.only(child), {
      onMouseEnter: this.handleMouseEnter,
      onMouseLeave: this.handleMouseLeave,
      // prevent hover showing while responder
      onResponderGrant: this.handleGrant,
      onResponderRelease: this.handleRelease,
      // if child is Touchable
      onPressIn: this.handleGrant,
      onPressOut: this.handleRelease,
    });
  }
}

Hoverable.displayName = 'Hoverable';

Hoverable.propTypes = {
  children: oneOfType([func, element]),
  onHoverIn: func,
  onHoverOut: func,
};
