import React from "react";
import ButtonAppBar from "./ButtonAppBar";
const styles = {
  flexDirection: {
    display: "flex",
    flexDirection: "rowReverse",
  },
  list: {
    border: "solid 2px ",
    marginTop: "10px",
  },
  timeInput: {
    border: "solid 2px ",
    marginTop: "10px",
    marginRight: "10px",
    width: "30%",
  },
  titleInput: {
    border: "solid 2px ",
    marginTop: "10px",
    width: "70%",
  },
};

export default class TodoList extends React.Component {
  render() {
    const { time, title, content } = this.props;

    return (
      <div>
        <ButtonAppBar />
        <div style={styles.flexDirection}>
          <div style={styles.timeInput}>{time}</div>
          <div style={styles.titleInput}>{title}</div>
        </div>
        <div style={styles.list}>{content}</div>
      </div>
    );
  }
}
