import React, { Component } from "react";

export default class Grid extends Component {
  toCssClasses(numbers) {
    const cols = numbers ? numbers.split(" ") : [];
    let classes = "";

    if (cols[0]) classes += `col-${cols[0]}`;
    if (cols[1]) classes += ` col-sm-${cols[1]}`;
    if (cols[2]) classes += ` col-md-${cols[2]}`;
    if (cols[3]) classes += ` col-lg-${cols[3]}`;
    if (cols[4]) classes += ` col-xl-${cols[4]}`;

    return classes;
  }

  toCssClassName(cols, className) {
    const classes = className ? cols.concat(` ${className}`) : cols;
    return classes;
  }

  render() {
    let gridClasses = this.toCssClasses(this.props.cols || "12");
    gridClasses = this.toCssClassName(gridClasses, this.props.className);
    return <div className={gridClasses}>{this.props.children}</div>;
  }
}
