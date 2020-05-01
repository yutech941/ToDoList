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

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const val = {
      inputVal: {
        title: this.state.titleVal,
        content: this.state.contentVal,
      },
    };

    this.setState({
      titleVal: "",
      contentVal: "",
    });
    this.props.callBackAddTask(val);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div style={styles.flexDirection}>
            {/*日付表示*/}

            <TimeCreator />

            {/*タイトル入力フォーム*/}
            <TextField
              label="title"
              variant="outlined"
              value={this.props.TitleVal}
              onChange={this.props.handleChangeTitle}
            />
          </div>
          {/*コンテンツ入力フォーム*/}
          <TextField
            label="content"
            style={{ margin: 8 }}
            placeholder="something todo"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            value={this.props.ContentVal}
            onChange={this.props.handleChangeContent}
          />

          <div style={styles.submitButton}>
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
