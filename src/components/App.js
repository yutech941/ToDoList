import React from "react";
import SimpleContainer from "../material-ui/containerUi";

export default class TodoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
    };
  }

  render() {
    return (
      <div>
        <SimpleContainer />
      </div>
    );
  }
}
