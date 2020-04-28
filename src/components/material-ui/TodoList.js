import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

export default class TodoList extends React.Component {
  render() {
    return (
      <List>
        <ListItem>{this.props.text}</ListItem>
      </List>
    );
  }
}
