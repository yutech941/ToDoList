import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import moment from "moment/moment";

const styles = {
  flexDirection: {
    display: "flex",
    flexDirection: "rowReverse",
  },
  titleInput: {
    width: "100%",
  },
  submitButton: {
    width: "100%",
    marginLeft: "360px",
  },
  timeInput: {
    width: "120px",
    marginLeft: "10px",
    marginRight: "10px",
  },
};

export default class TodoCreator extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.flexDirection}>
          {/*日付表示*/}
          <TextField
            style={styles.timeInput}
            variant="outlined"
            value={this.props.dateVal}
          />

          {/*タイトル入力フォーム*/}
          <TextField
            style={styles.titleInput}
            label="title"
            variant="outlined"
            value={this.props.titleVal}
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
          value={this.props.contentVal}
          onChange={this.props.handleChangeContent}
        />

        <div style={styles.submitButton}>
          <Button
            variant="contained"
            type="button"
            onClick={this.props.handleClick}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}
