import React from "react";

export default class ToDocreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }
  handleChange(e) {
    this.setState({
      val: e.target.value,
    });
  }
  handleKeyUp(e) {
    if (e.KeyCode === 13 && e.shiftKey === true) {
      this.setState({
        val: "",
      });
      this.props.callBackAddList(val);
    }
  }
}
