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
      titleVal: "",
      contentVal: "",
    };
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({
      titleVal: e.target.value,
    });
  }
  handleChangeContent(e) {
    this.setState({
      contentVal: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
          <div style={styles.flexDirection}>
            {/*日付表示*/}
            <TimeCreator />

            {/*タイトル入力フォーム*/}
            <TextField
              id="outlined-basic"
              label="title"
              variant="outlined"
              value={this.state.titleVal}
              onChange={this.handleChangeTitle}
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
            value={this.state.contentVal}
            onChange={this.handleChangeContent}
          />

          <div style={styles.submitButton}>
            <Button
              variant="contained"
              type="submit"
              onSubmit={this.handleSubmit}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
