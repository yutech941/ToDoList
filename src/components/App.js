import React from "react";
import ButtonAppBar from "./material-ui/ButtonAppBar";
import TodoCreator from "./material-ui/TodoCreator";
import TodoList from "./material-ui/TodoList";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listdata: [
        {
          id: this.createHashId(),
          text: "sample todo",
        },
      ],
    };

    this.callBackAddTask = this.callBackAddTask.bind(this);
  }

  //リストのキー生成
  createHashId() {
    return Math.random().toString(36).slice(-16);
  }

  //タスク追加
  callBackAddTask(val) {
    let nextData = this.state.listdata;
    nextData.push({ id: this.createHashId(), text: val });
    this.setState({
      listdata: nextData,
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            margin: "100px 500px 0 500px",
          }}
        >
          <TodoCreator callBackAddTask={this.callBackAddTask} />

          <ButtonAppBar />

          {this.state.listdata.map((todo) => (
            <TodoList key={todo.id} text={todo.text} />
          ))}
        </div>
      </div>
    );
  }
}
