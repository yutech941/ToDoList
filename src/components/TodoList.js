import React from "react";
import ButtonAppBar from "./ButtonAppBar";
const styles = {
  list: {
    border: "solid 3px aquamarine",
    marginTop: "10px",
  },
};

export default class TodoList extends React.Component {
  render() {
    const { title, content } = this.props;

    return (
      <div>
        <ButtonAppBar />
        <div style={styles.list}>{title}</div>
        <div style={styles.list}>{content}</div>
      </div>
    );
  }
}
