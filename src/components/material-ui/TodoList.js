import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default class TodoList extends React.Component {
  render() {
    const { text } = this.props;

    return (
      <List>
        <ListItem>{text}</ListItem>
      </List>
    );
  }
}
