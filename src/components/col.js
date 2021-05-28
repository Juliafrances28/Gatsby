import React from "react";

class ColumnSection extends React.Component {
  render() {
    return <div>{ this.props.children }</div>;
  }
}

export default ColumnSection;