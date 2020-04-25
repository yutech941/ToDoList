import React from "react";
import BasicTextFields from "../material-ui/inputUi";

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
      this.props.callBackAddTask(val);
    }
  }

  render() {
    return (
      <div>
        <BasicTextFields />
      </div>
    );
  }
}
