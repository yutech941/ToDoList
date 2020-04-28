import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default class TodoCreator extends React.Component {
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
    if (e.keyCode === 13 && e.shiftKey === true) {
      const val = e.target.value;

      this.setState({
        val: "",
      });
      this.props.callBackAddTask(val);
    }
  }

  render() {
    return (
      <div>
        <TextField
          id="outlined-basic"
          label="title"
          variant="outlined"
          value={this.state.val}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyUp}
        />

        <TextField
          id="outlined-full-width"
          label="Label"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <Button variant="contained">Submit</Button>
      </div>
    );
  }
}
