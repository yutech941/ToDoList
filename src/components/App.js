import React from "react";
import ButtonAppBar from "./material-ui/ButtonAppBar";
import TodoCreator from "./material-ui/TodoCreator";
import SimpleList from "./material-ui/SimpleList";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listdata: [
        {
          id: this.createHashId(),
          text: "sample todo1",
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
        <ButtonAppBar />

        <div
          style={{
            margin: "100px 500px 0 500px",
          }}
        >
          <TodoCreator callBackAddTask={this.callBackAddTask} />

          <SimpleList />
        </div>
      </div>
    );
  }
}
