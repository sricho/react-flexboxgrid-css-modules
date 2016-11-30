import React, { Component, PropTypes } from "react";
import classnames from "classnames";
import flexboxgrid from "flexboxgrid/dist/flexboxgrid.css";

const DEFAULT_NODE = 'div';


export default class Grid extends Component {
  static propTypes = {
    fluid: PropTypes.bool,
    nodeName: PropTypes.string
  };

  static defaultProps = {
    nodeName: DEFAULT_NODE,
  };

  render() {
    const {
      fluid,
      nodeName,
      children,
      ...other
    } = this.props;
    const Element = nodeName || DEFAULT_NODE;
    const classes = classnames({
      [flexboxgrid['container']]: !fluid,
      [flexboxgrid['container-fluid']]: fluid
    });

    return (
      <Element className={ classes } { ...other }>
        { children }
      </Element>
    );
  }
}
