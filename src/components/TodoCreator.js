import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TimeCreator from "./TimeCreator";

const styles = {
  flexDirection: {
    display: "flex",
    flexDirection: "rowReverse",
  },
  submitButton: {
    width: "100%",
    marginLeft: "360px",
  },
};

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
        <div style={styles.flexDirection}>
          {/*日付表示*/}
          <TimeCreator />

          {/*タイトル入力フォーム*/}
          <TextField
            id="outlined-basic"
            label="title"
            variant="outlined"
            value={this.state.val}
            onChange={this.handleChange}
            onKeyUp={this.handleKeyUp}
          />
        </div>
        {/*コンテンツ入力フォーム*/}
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

        <div style={styles.submitButton}>
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
