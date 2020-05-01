import React from "react";
import TodoCreator from "./TodoCreator";
import TodoList from "./TodoList";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //リスト表示データ
      listdata: [
        {
          id: this.createHashId(),
          title: "タイトル",
          content: "内容",
        },
      ],
      //タスク追加データ
      titleVal: "",
      contentVal: "",
    };

    this.callBackAddTask = this.callBackAddTask.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
  }
  //タイトルのValue取得
  handleChangeTitle(e) {
    this.setState({
      titleVal: e.target.value,
    });
  }
  //コンテンツのValue取得
  handleChangeContent(e) {
    this.setState({
      contentVal: e.target.value,
    });
  }

  //リストのキー生成
  createHashId() {
    return Math.random().toString(36).slice(-16);
  }

  //タスク追加
  callBackAddTask(val) {
    let nextData = this.state.listdata;
    nextData.push({
      id: this.createHashId(),
      title: val.this.state.titileVal,
      content: val.this.state.contentVal,
    });
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
          <TodoCreator
            titleleVal={this.state.titileVal}
            contentVal={this.state.contentVal}
            handleChangeTitile={this.handleChangeTitle}
            handleChangeContent={this.handleChangeContent}
            callBackAddTask={this.callBackAddTask}
          />

          {this.state.listdata.map((todo) => (
            <TodoList key={todo.id} title={todo.title} content={todo.content} />
          ))}
        </div>
      </div>
    );
  }
}
