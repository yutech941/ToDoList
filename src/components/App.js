import React from "react";
import ButtonAppBar from ".//ButtonAppBar";
import TodoCreator from "./TodoCreator";
import TimeCreator from "./TimeCreator";
import TodoList from "./TodoList";

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
          <div
            style={{
              display: "flex",
            }}
          >
            <TimeCreator />

            <TodoCreator callBackAddTask={this.callBackAddTask} />
          </div>

          <ButtonAppBar />

          {this.state.listdata.map((todo) => (
            <TodoList key={todo.id} text={todo.text} />
          ))}
        </div>
      </div>
    );
  }
}
